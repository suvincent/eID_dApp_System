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
    address public ministryEntity = 0x9F54e2c49f5E61711BA6D4263c54b3eD8B25402c;
    
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
    
    function validation(string memory hashValue) public view returns (bool) {
        string memory certHash;
        certHash = hashValue;
        require(isOnChain[certHash]);
        return true;
    }
    
    function ministryLogin(address ministryAddr) public view returns (bool) {
        Entity entityMinistry = Entity(ministryAddr);
        string memory text = entityMinistry.columnValue(ministryEntity, "certificate", "isMinistry");
        require(keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("Yes")));
        return true;
    }
    
    function verifyIsSchool(address schoolAddr) public view returns (bool) {
        Entity entitySchool = Entity(schoolAddr);
        string memory text = entitySchool.columnValue(ministryEntity, "schoolCertificate", "isSchool");
        require(keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("Yes")));
        return true;
    }

    function existence(address studentAddr, address schoolAddr) public view returns (bool) {
        Entity entityStudent = Entity(studentAddr);
        string memory text_graduate = entityStudent.columnValue(schoolAddr, "diploma", "isGraduated");
        require(keccak256(abi.encodePacked(text_graduate)) == keccak256(abi.encodePacked("Yes")));
        return true;
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
}