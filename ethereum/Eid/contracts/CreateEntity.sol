//SPDX-License-Identifier: MIT
pragma solidity >= 0.6.0 < 0.7.0;
pragma experimental ABIEncoderV2;
import "./Validation.sol";
import "./Entity.sol";
import "./Registry.sol";

contract CreateEntity {
    struct Account {
        address validation;
        address entity;
        address registry;
        string description;
    }

    mapping(address=>Account) public initialEOAtoAccount;

    function create(string memory description, address EOAtoBind) public {
        Validation v = new Validation(address(this));
        Entity e = new Entity(address(this));
        Registry r = new Registry(address(this));

        Account memory toCreate;
        toCreate.validation = address(v);
        toCreate.entity = address(e);
        toCreate.registry = address(r);
        toCreate.description = description;

        v.initialization(address(e), EOAtoBind);
        e.initialization(address(v), address(r), description);
        r.initialization(address(e));

        initialEOAtoAccount[EOAtoBind] = toCreate;
    }

}