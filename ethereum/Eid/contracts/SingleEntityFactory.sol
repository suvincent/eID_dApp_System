pragma solidity >= 0.6;
import "./SingleEntity.sol";

contract SingleEntityFactory {
    struct Account {
        address entity;
        address source;
        string description;
    }

    mapping(address=>address) public initialEOAtoAccount;
    Account[] public Array;

    function create(string memory description, address EOA) public {
        Account memory toCreate;
        
        toCreate.description = description;
        SingleEntity se = new SingleEntity(EOA);
        toCreate.source = EOA;
        toCreate.entity = address(se);
        initialEOAtoAccount[EOA] = address(se);

        Array.push(toCreate);
    }
    function entityLength() public view returns(uint256){
        return Array.length;
    }
    
    function searchEntity(address EOA) public view returns(address) {
        return initialEOAtoAccount[EOA];
    }

}