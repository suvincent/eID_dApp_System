pragma solidity >= 0.6.0 < 0.7.0;
pragma experimental ABIEncoderV2;
import "./Registry.sol";
import "./Entity.sol";
import 

contract Verify {
    struct School {
        string name;
        address schoolAddr;
    }
    
    School[] public schools;
    address public MinistryofEducation;
    //address[] public schools;
    string[] public certHashOnChain;
    string public certHash;
    mapping(address => bool) isSchool;
    mapping(string => bool) isOnChain;
    
    constructor() public {
        MinistryofEducation = msg.sender;
    }
    
    modifier restricted() {
        require(isSchool[msg.sender] || msg.sender == MinistryofEducation);
        _;
    }

    
    function addNewSchool(address schoolAddr, string memory schoolName) public restricted {
        require(!isSchool[schoolAddr]);

        Entity entitySchool = Entity(schoolAddr);
        address addrRegistry = entitySchool.registry();
        Registry registrySchool = Registry(addrRegistry);
        registrySchool.writeFromOtherEntity("isSchool");

        //schools.push(school);
        //isSchool[school] = true;
        
        School memory newSchool = School({
            name: schoolName,
            schoolAddr: schoolAddr
        });
        schools.push(newSchool);
        isSchool[schoolAddr] = true;
    }
    
    function upload(string memory hashValue, address student) public restricted {
        require(!isOnChain[hashValue]);

        Entity entityStudent = Entity(student);
        address addrRegistry = entityStudent.registry();
        Registry registryStudent = Registry(addrRegistry);
        registryStudent.writeFromOtherEntity("CertisIssued");

        certHashOnChain.push(hashValue);
        isOnChain[hashValue] = true;
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
        //address addr = school;
        //require(isSchool[addr]);
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
    
    function getDeployedCerts() public view returns (string[] memory) {
        return certHashOnChain;
    }
}