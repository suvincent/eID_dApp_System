pragma solidity >= 0.6.0 < 0.7.0;
pragma experimental ABIEncoderV2;
import "./Registry.sol";
import "./Entity.sol";
import "./CreateEntity.sol";

contract Verify {
    struct School {
        string name;
        address schoolAddr;
    }
    
    struct Certificate {
        string name;
        address studentAddr;
        string certHash;
    }
    
    School[] public schools;
    //Certificate[] public certificates;
    address public MinistryofEducation;
    //string[] public certHashOnChain;
    string public certHash;
    mapping(address => bool) isSchool;
    mapping(string => bool) isOnChain;
    //address CEaddress;
    mapping(address => mapping(address => Certificate)) public schoolOwnedCert;
    mapping(address => address[]) public schoolOwnedStudent;
    
    constructor() public {
        MinistryofEducation = msg.sender;
    }

    modifier restricted_school() {
        //CreateEntity search = CreateEntity(CEaddress);
        CreateEntity search = CreateEntity(address(0x950BD33F71A716B0a6161eBC09Cd89F446698abf));
        address toSearch = search.searchEntity(msg.sender);
        require(isSchool[toSearch]);
        _;
    }
    
    modifier restricted_ministry() {
        require(msg.sender == MinistryofEducation);
        _;
    }
    
    /*function changeAddress(address addr) public {
        CEaddress = addr;
    }*/

    function addNewSchool(address schoolAddr, string memory schoolName) public restricted_ministry {
        require(!isSchool[schoolAddr]);

        Entity entitySchool = Entity(schoolAddr);
        address addrRegistry = entitySchool.registry();
        Registry registrySchool = Registry(addrRegistry);
        registrySchool.writeFromOtherEntity("isSchool");
        
        School memory newSchool = School({
            name: schoolName,
            schoolAddr: schoolAddr
        });
        schools.push(newSchool);
        isSchool[schoolAddr] = true;
    }
    
    function upload(string memory hashValue, address student, string memory studentName) public restricted_school {
        require(!isOnChain[hashValue]);

        Entity entityStudent = Entity(student);
        address addrRegistry = entityStudent.registry();
        Registry registryStudent = Registry(addrRegistry);
        registryStudent.writeFromOtherEntity("CertisIssued");

        Certificate memory newCert = Certificate ({
            name: studentName,
            studentAddr: student,
            certHash: hashValue
        });
        
        //certificates.push(newCert);
        isOnChain[hashValue] = true;
        
        schoolOwnedStudent[msg.sender].push(student);
        schoolOwnedCert[msg.sender][student] = newCert;
        //certList[msg.sender] = certificates;
    }
    
    function validation(string memory hashValue) public {
        certHash = hashValue;
        require(isOnChain[certHash]);
    }
    
    function legality(address school) public view {
        Entity entitySchool = Entity(school);
        address addrRegistry = entitySchool.registry();
        Registry registrySchool = Registry(addrRegistry);
        string memory text = registrySchool.dataField(address(this),0);
        require(keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("isSchool")));
    }

    function existence(address student) public view {
        Entity entityStudent = Entity(student);
        address addrRegistry = entityStudent.registry();
        Registry registryStudent = Registry(addrRegistry);
        string memory text = registryStudent.dataField(address(this),0);
        require(keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("CertisIssued")));
    }
    
    function getSchoolsCount() public view returns (uint256) {
        return schools.length;
    }
    
    function getDeployedCerts(address sender) public view returns (uint256) {
        return schoolOwnedStudent[sender].length;
    }
    
    function getStudentList(address sender) public view returns (address[] memory) {
        return schoolOwnedStudent[sender];
    }
}