pragma solidity >= 0.6;

import "./Entity.sol";

contract SingleEntity is Entity {
    mapping(address=>bool) public isOwner;
    address[] public owners;
    
    modifier accessGranted override {
        require(isOwner[msg.sender]);
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
    
    constructor(address owner) public {
        isSingle = true;
        isOwner[owner] = true;
        owners.push(owner);
    }
    
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
    
}

