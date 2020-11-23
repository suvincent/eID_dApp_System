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
    address public manager;
    address public ministryEntity = 0x2BFD52B07F59051B366aCBa510154ea1Be60FFAC;
    
    mapping(address => bool) isSchool;
    mapping(address => mapping(address => Certificate)) public schoolOwnedCert;
    mapping(address => address[]) public schoolOwnedStudent;
    
    constructor() public {
        manager = msg.sender;
    }
    
    function stringToUint(string memory s)public pure returns (uint) {
        bytes memory b = bytes(s);
        uint i;
        uint temp = 0;
        for (i = 0; i < b.length; i++) {
            uint c = uint(uint8(b[i]));
            if (c >= 48 && c <= 57) {
                temp = temp * 10 + (c - 48);
            }
        }
        return temp;
    }
    
    function addNewSchool(address schoolAddr, string memory schoolName) public {
        School memory newSchool = School({
            name: schoolName,
            schoolAddr: schoolAddr
        });
        schools.push(newSchool);
    }
    
    function upload(address school, string memory hashValue, address studentAddr, string memory studentName, string memory graduate) public {
        Certificate memory newCert = Certificate ({
            name: studentName,
            studentAddr: studentAddr,
            certHash: hashValue,
            isGraduated: graduate
        });
        
        schoolOwnedStudent[school].push(studentAddr);
        schoolOwnedCert[school][studentAddr] = newCert;
    }
    
    function ministryLogin(address ministryAddr) public view returns (bool) {
        Entity entityMinistry = Entity(ministryAddr);
        string memory text = entityMinistry.columnValue(ministryEntity, "certificate", "isMinistry");
        if (keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("Yes")))
            return true;
        else return false;
    }
    
    function verifyIsSchool(address schoolAddr) public view returns (bool) {
        Entity entitySchool = Entity(schoolAddr);
        string memory text_school = entitySchool.columnValue(ministryEntity, "schoolCertificate", "isSchool");
        if (keccak256(abi.encodePacked(text_school)) == keccak256(abi.encodePacked("Yes")))
            return true;
        else return false;
    }

    function existence(address studentAddr, address schoolAddr) public view returns (bool) {
        Entity entityStudent = Entity(studentAddr);
        string memory text_graduate = entityStudent.columnValue(schoolAddr, "diploma", "isGraduated");
        if (keccak256(abi.encodePacked(text_graduate)) == keccak256(abi.encodePacked("Yes")))
            return true;
        else return false;
    }
    
    function expired(address studentAddr, address schoolAddr) public view returns (bool) {
        Entity entityStudent = Entity(studentAddr);
        uint time = stringToUint(entityStudent.columnValue(schoolAddr, "diploma", "CertificateEndDate"));
        if (now * 1000 < time)
            return true;
        else return false;
    }
    
    function verifyMarkup (address studentAddr, address schoolAddr) public view returns (bool) {
        Entity entityStudent = Entity(studentAddr);
        string memory text_markup = entityStudent.MarkupsSender(schoolAddr, "diploma");
        if (keccak256(abi.encodePacked(text_markup)) == keccak256(abi.encodePacked("Canceled")))
            return false;
        else return true;
    }
    
    function getIPFS(address studentAddr, address schoolAddr) public view returns (string memory){
        Entity entityStudent = Entity(studentAddr);
        string memory text_IPFS = entityStudent.columnValue(schoolAddr, "diploma", "IPFShash");
        return text_IPFS;
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