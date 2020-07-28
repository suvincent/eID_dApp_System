//SPDX-License-Identifier: MIT
pragma solidity >= 0.6.0 < 0.7.0;

import "./Entity.sol";
import "./Registry.sol";

contract Validation {
    address entity;
    address EOA;
    address factory;
    Entity ownedEntity;

    modifier isFactory() {
        require(msg.sender == factory, "This function can only be called by the time of initialization");
        _;
    }

    modifier accessGranted() {
        require(msg.sender == EOA, "You have no access by this EOA.");
        _;
    }

    modifier fromEntity() {
        require(msg.sender == entity, "This should be called by entity.");
        _;
    }

    constructor(address _factory) public {
        factory = _factory;
    }

    function initialization(address _entity, address _EOA) public isFactory {
        entity = _entity;
        EOA = _EOA;
        ownedEntity = Entity(entity);
    }

    function _modifyEOA(address newEOA) public fromEntity {
        EOA = newEOA;
    }

    //Entity's function
    function modifyEOA(address newEOA) public accessGranted {
        ownedEntity.modifyEOAToAccess(newEOA);
    }

    function modifyDescription(string memory newDescription) public accessGranted {
        ownedEntity.modifyDescription(newDescription);
    }

    function writeToRegistry(address destRegistryAddress, string memory data) public accessGranted {
        ownedEntity.writeToRegistry(destRegistryAddress, data);
    }

    function writeToRegistryByEntity(address destEntityAddress, string memory data) public accessGranted {
        ownedEntity.writeToRegistryByEntity(destEntityAddress, data);
    }

    function deleteRegistryDataByIndex(address destEntity, uint256 index) public accessGranted {
        ownedEntity.deleteRegistryDataByIndex(destEntity, index);
    }

}