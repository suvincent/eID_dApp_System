//SPDX-License-Identifier: MIT
pragma solidity >= 0.6.0 < 0.7.0;
import "./Registry.sol";
import "./Validation.sol";

contract Entity {
    address validation;
    address public registry;
    address factory;
    string public description;

    modifier isFactory() {
        require(msg.sender == factory, "This function can only be called by the time of initialization.");
        _;
    }

    modifier isValidated() {
        require(msg.sender == validation, "You have no access to this entity.");
        _;
    }

    constructor(address _factory) public {
        factory = _factory;
    }

    function initialization(address _validation, address _registry, string memory _description) public isFactory {
        validation = _validation;
        registry = _registry;
        description = _description;
    }

    function modifyDescription(string memory newDescription) public isValidated {
        description = newDescription;
    }

    //Call Registry's function
    function writeToRegistry(address destRegistryAddress, string memory data) public isValidated {
        Registry destRegistry = Registry(destRegistryAddress);
        destRegistry.writeFromOtherEntity(data);
    }

    function writeToRegistryByEntity(address destEntityAddress, string memory data) public isValidated {
        Entity destEntity = Entity(destEntityAddress);
        writeToRegistry(destEntity.registry(), data);
    }

    function deleteRegistryDataByIndex(address destEntity, uint256 index) public isValidated {
        Registry ownedRegistry = Registry(registry);
        ownedRegistry.deleteDataByIndex(destEntity, index);
    }


    //Call Validator's function
    function modifyEOAToAccess(address newEOA) public isValidated {
        Validation ownValidation = Validation(validation);
        ownValidation._modifyEOA(newEOA);
    }
}