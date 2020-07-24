pragma solidity >= 0.6.0 < 0.7.0;
pragma experimental ABIEncoderV2;

contract Verify {
    address public MinistryofEducation;
    address[] public schools;
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
    
    function newSchool(address school) public restricted {
        require(!isSchool[school]);
        schools.push(school);
        isSchool[school] = true;
    }
    
    function upload(string memory hashValue) public restricted {
        require(!isOnChain[hashValue]);
        certHashOnChain.push(hashValue);
        isOnChain[hashValue] = true;
    }
    
    function validation(string memory hashValue) public {
        certHash = hashValue;
        require(isOnChain[certHash]);
    }
    
    function legality(address school) public view {
        address addr = school;
        require(isSchool[addr]);
    }
    
    function getSchoolsCount() public view returns (uint256) {
        return schools.length;
    }
    
    function getDeployedCerts() public view returns (string[] memory) {
        return certHashOnChain;
    }
    
    /*function notrevoked() public {
        
    }
    
    function existence() public {
        
    }*/
    
}