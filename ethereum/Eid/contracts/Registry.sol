//SPDX-License-Identifier: MIT
pragma solidity >= 0.6.0 < 0.7.0;

// @title Registry
// @dev Only the owner of registry could delete data & Only the data sender can write data in its field
// To write an array of string, you must write it one by one element.
// To retrieve all data from an entity, you must first get the length of array,
// then use getter function of dataField to retrieve string data one by one in js for-loop.
// The index of data might be varied, due to restrictions of solidity, once you've deleted some files
contract Registry {

    //This stores the owner of this Personal Registry
    //Owner will be the contract address of an arbitrary entity.
    address public owner;
    address factory;

    mapping(address=>string[]) public dataField;

    modifier isFactory() {
        require(msg.sender == factory, "This function can only be called by the time of initialization");
        _;
    }

    modifier isOwner() {
        require(msg.sender == owner, "Your action is invalid!");
        _;
    }


    // @param setOwner will be setuped in Creating Entity phase. For development, set it up yourself
    constructor(address _factory) public {
        factory = _factory;
    }

    function initialization(address entity) public isFactory {
        owner = entity;
    }

    function writeFromOtherEntity(string memory data) public {
        dataField[msg.sender].push(data);
    }

    function deleteDataByIndex(address entity, uint256 index) public isOwner {
        require(dataField[entity].length > index, "The index is out of bound!");
        dataField[entity][index] = dataField[entity][dataField[entity].length - 1];
        dataField[entity].pop();
    }

    function numberOfDataFromOneAddress(address _address) external view returns(uint256 length){
        return dataField[_address].length;
    }

}