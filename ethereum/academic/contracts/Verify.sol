pragma solidity >= 0.6.0 < 0.7.0;
pragma experimental ABIEncoderV2;
import "./Entity.sol";

contract Verify {
    struct School {
        string name;
        address schoolAddr;
    }
    
    struct Certificate {
        string name;
        address studentAddr;
        string certHash;
        string isGraduated;
    }
    
    School[] public schools;
    //Certificate[] public certificates;
    address public MinistryofEducation;
    address public user;
    address public ministryEntity = 0xD884A1f1CCF5968C27B7054f560bfC588C8e37F0;
    string public certHash;
    mapping(address => bool) isSchool;
    mapping(string => bool) isOnChain;
    mapping(address => mapping(address => Certificate)) public schoolOwnedCert;
    mapping(address => address[]) public schoolOwnedStudent;
    
    constructor() public {
        MinistryofEducation = msg.sender;
    }
    
    modifier restricted_ministry() {
        require(msg.sender == MinistryofEducation);
        _;
    }
    
    function addNewSchool(address schoolAddr, string memory schoolName) public {
        School memory newSchool = School({
            name: schoolName,
            schoolAddr: schoolAddr
        });
        schools.push(newSchool);
        isSchool[schoolAddr] = true;
    }
    
    function upload(string memory hashValue, address studentAddr, string memory studentName, string memory graduate) public {
        Certificate memory newCert = Certificate ({
            name: studentName,
            studentAddr: studentAddr,
            certHash: hashValue,
            isGraduated: graduate
        });
        
        //certificates.push(newCert);
        isOnChain[hashValue] = true;
        
        schoolOwnedStudent[msg.sender].push(studentAddr);
        schoolOwnedCert[msg.sender][studentAddr] = newCert;
    }
    
    function validation(string memory hashValue) public {
        certHash = hashValue;
        require(isOnChain[certHash]);
    }
    
    function ministryLogin(address ministryAddr) public {
        user = ministryAddr;
        Entity entityMinistry = Entity(ministryAddr);
        string memory text = entityMinistry.columnValue(ministryEntity, "certificate", "isMinistry");
        require(keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("Yes")));
    }
    
    function verifyIsSchool(address schoolAddr) public {
        user = schoolAddr;
        Entity entitySchool = Entity(schoolAddr);
        string memory text = entitySchool.columnValue(ministryEntity, "schoolCertificate", "isSchool");
        require(keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("Yes")));
    }

    function existence(address studentAddr, address schoolAddr) public view {
        Entity entityStudent = Entity(studentAddr);
        string memory text_graduate = entityStudent.columnValue(schoolAddr, "diploma", "isGraduated");
        require(keccak256(abi.encodePacked(text_graduate)) == keccak256(abi.encodePacked("Yes")));
    }
    
    function getIPFS(address studentAddr, address schoolAddr) public view returns (string memory){
        Entity entityStudent = Entity(studentAddr);
        string memory text = entityStudent.columnValue(schoolAddr, "diploma", "IPFS hash");
        return text;
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
    
    function getUserEntity() public view returns (address) {
        return user;
    }
}