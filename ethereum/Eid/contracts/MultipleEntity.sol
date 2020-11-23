pragma solidity >= 0.6;

import "./Entity.sol";

contract MultipleEntity is Entity {
    mapping(address=>bool) public isOwner;
    address[] public owners;
    
    modifier accessGranted override {
        require(isOwner[msg.sender]);
        _;
    }
    
    modifier multipleControl(uint32 index) override {
        require(!votedApproveToReceive[msg.sender][index]);
        votedApproveToReceive[msg.sender][index] = true;
        approveToReceiveCount[index]++;
        if(approveToReceiveCount[index]*2 >= owners.length){
            toReceiveIsConfirmed[index] = true;
        }
        _;
    }
    
    modifier ownerExists(address owner) {
        require(isOwner[owner]);
        _;
    }
    
    modifier notNull(address _address) {
        require(_address != address(0x0));
        _;
    }
    
    constructor(address[] memory _owners) public {
        isSingle = false;
        
        for(uint32 i=0; i<_owners.length; i++){
            Entity check = Entity(_owners[i]);
            require(check.isEntity());
            isOwner[_owners[i]] = true;
            owners.push(_owners[i]);
        }
        
    }
    
    mapping(uint32=>uint32) public approveToReceiveCount;
    mapping(address=>mapping(uint32=>bool)) votedApproveToReceive;
    
    function addOwner(address owner)
        public
        accessGranted
        notNull(owner)
    {
        isOwner[owner] = true;
        owners.push(owner);
    }
    
    function removeOwner(address owner)
        public
        accessGranted
        ownerExists(owner)
    {   
        require(owners.length > 1);
        isOwner[owner] = false;
        for (uint32 i=0; i<owners.length - 1; i++)
            if (owners[i] == owner) {
                owners[i] = owners[owners.length - 1];
                break;
            }
        owners.pop();
    }
    
    function getCount(uint32 index) public view returns(uint32, uint32){
        return (approveToReceiveCount[index], uint32(owners.length));
    }
}

