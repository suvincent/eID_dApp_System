pragma solidity >= 0.6;
import {strings} from "./strings.sol";


contract Entity {
    using strings for *;
    struct storingData {
        mapping(string=>string) column;
        //Because of solidity's limitation, we can't use string array here
        string keys;
    }
    
    struct pendingData {
        address source;
        address destination;
        string description;
        string[] key;
        mapping(string=>bool) keyExistence;
        mapping(string=>uint32)  keyIndex;
        string[] value;
        bool approved;
    }


    
    modifier accessGranted virtual {
        _;
    }
    
    modifier multipleControl(uint32 index) virtual {
        _;
    }
    
    //Identifier
    bool constant public isEntity = true;
    bool public isSingle;
    mapping(address=>uint32) public recentSendingIndex;
    
    //Storage Variables
    mapping(address=>mapping(string=>storingData)) public Storage;
    address[] public dataSource;
    mapping(address=>bool) public hasWritten;
    mapping(address=>string[]) public descriptionsBySource; 
    mapping(address=>mapping(string=>bool)) public writtenDescription;
    
    //Receiving Data Variables
    pendingData[] public pendingDataToReceive; 
    mapping(uint32=>bool) toReceiveIsConfirmed;
    
    //Sending Data Variables
    pendingData[] public pendingDataToSend;
    
    //Receiving Data Functions
    function _newData(string calldata _description)
        external 
        returns(uint32) 
    {
        pendingData memory newData;
        newData.source = msg.sender;
        newData.description = _description;
        newData.approved = false;
        pendingDataToReceive.push(newData);
        return uint32(pendingDataToReceive.length - 1);
    }
    
    function _receiveData(string calldata _key, string calldata _value, uint32 index)
        external 
    {
        pendingDataToReceive[index].value.push(_value);
        pendingDataToReceive[index].key.push(_key);
    }
    
    function _approveDataToReceive(uint32 index) 
        internal
    {
        require(!pendingDataToReceive[index].approved);
        storingData storage toApprove = Storage[pendingDataToReceive[index].source][pendingDataToReceive[index].description];
        for(uint32 i=0; i<pendingDataToReceive[index].key.length; i++){
            toApprove.column[pendingDataToReceive[index].key[i]] = pendingDataToReceive[index].value[i];
            toApprove.keys = string(abi.encodePacked(
                toApprove.keys,
                ", ",
                pendingDataToReceive[index].key[i]));
        }
        if(!hasWritten[pendingDataToReceive[index].source]){
            dataSource.push(pendingDataToReceive[index].source);
            hasWritten[pendingDataToReceive[index].source] = true;
        }
        if(!writtenDescription[pendingDataToReceive[index].source][pendingDataToReceive[index].description]){
            descriptionsBySource[pendingDataToReceive[index].source].push(pendingDataToReceive[index].description);
            writtenDescription[pendingDataToReceive[index].source][pendingDataToReceive[index].description] = true;
        }
        pendingDataToReceive[index].approved = true;
    }
    
    function approveDataToReceive(uint32 index)
        public
        accessGranted
        multipleControl(index)
    {
        if(toReceiveIsConfirmed[index] || isSingle){
            _approveDataToReceive(index);
        }
    }
    
    function approveMultipleToReceive(address multipleEntity, uint32 index)
        public
        accessGranted
    {
        Entity mE = Entity(multipleEntity);
        mE.approveDataToReceive(index);
    }
    
    function pendingDataToReceiveCount() 
        public 
        view 
        returns(uint32) 
    {
        return uint32(pendingDataToReceive.length);
    }
    
    function dataSizeToReceive(uint32 index) 
        public 
        view 
        returns (uint32) 
    {
        return uint32(pendingDataToReceive[index].key.length);
    }
    
    function keyValueOfDataToReceive(uint32 index, uint32 keyIndex)
        public
        view
        returns (string memory, string memory)
    {
        return (pendingDataToReceive[index].key[keyIndex], pendingDataToReceive[index].value[keyIndex]);
    }
    
    //Sending Data Functions
    function newDataToSend(address _receiver, string memory _description, string memory _key, string memory _value, bool direct) 
        accessGranted
        public 
    {
        pendingData storage newData;
        newData.destination = _receiver;
        newData.description = _description;
        newData.approved = false;
        pendingDataToSend.push(newData);
        recentSendingIndex[_receiver] = uint32(pendingDataToSend.length - 1);

        strings.slice memory keys = _key.toSlice();
        strings.slice memory values = _value.toSlice();
        strings.slice memory deKeys = ",".toSlice();
        //string[] memory sKeys = new string[](keys.count(deKeys)+1);
        //string[] memory sValues = new string[](values.count(deKeys)+1);
        uint32 count = uint32(keys.count(deKeys)+1);
        for(uint32 i=0; i<count; i++){
            string memory addKey = keys.split(deKeys).toString();
            string memory addValue = values.split(deKeys).toString();
            if(!newData.keyExistence[addKey]){
                newData.key.push(addKey);
                newData.keyExistence[addKey] = true;
                newData.keyIndex[addKey] = i; 
                newData.value.push(addValue);
            }
            else{
                newData.value[newData.keyIndex[addKey]] = addValue;
            }
            
            //sKeys[i] = keys.split(deKeys).toString();
            //sValues[i] = values.split(deKeys).toString();
        }

        if(direct)
            approveDataToSend(uint32(pendingDataToSend.length - 1));
    }
    
    function newDataMultipleToSend(address multipleEntity, address _receiver, 
        string memory _description, string memory _key, string memory _value, bool direct)
        accessGranted
        public
        returns(uint32) 
    {
        Entity me = Entity(multipleEntity);
        me.newDataToSend(_receiver, _description, _key, _value, direct);
    }
    
    function addDataToSend(string memory _key, string memory _value, uint32 index) 
        accessGranted
        public 
    {
        if(!pendingDataToSend[index].keyExistence[_key]){
            pendingDataToSend[index].keyIndex[_key] = uint32(pendingDataToSend[index].key.length);
            pendingDataToSend[index].keyExistence[_key] = true;
            pendingDataToSend[index].key.push(_key);
            pendingDataToSend[index].value.push(_value);
        }
        else{
            uint32 i = pendingDataToSend[index].keyIndex[_key];
            pendingDataToSend[index].value[i] = _value;
        }
    }
    
    function addDataMultipleToSend(address multipleEntity, string memory _key, string memory _value, uint32 index) 
        accessGranted
        public 
    {
        Entity me = Entity(multipleEntity);
        me.addDataToSend(_key, _value, index);
    }
    
    function approveDataToSend(uint32 index) 
        accessGranted
        public 
    {
        require(!pendingDataToSend[index].approved);
        Entity receiver = Entity(pendingDataToSend[index].destination);
        uint32 idx = receiver._newData(pendingDataToSend[index].description);
        for(uint32 i=0; i<pendingDataToSend[index].key.length; i++){
            receiver._receiveData(pendingDataToSend[index].key[i], pendingDataToSend[index].value[i], idx);
        }
        pendingDataToSend[index].approved = true;
    }
    
    function approveMultipleToSend(address multipleEntity, uint32 index)
        accessGranted
        public
    {
        Entity me = Entity(multipleEntity);
        me.approveDataToSend(index);
    }
    
    function pendingDataToSendCount() 
        public 
        view 
        returns(uint32) 
    {
        return uint32(pendingDataToSend.length);
    }
    
    function dataSizeToSend(uint32 index) 
        public 
        view 
        returns (uint32) 
    {
        return uint32(pendingDataToSend[index].key.length);
    }
    
    function keyValueOfDataToSend(uint32 index, uint32 keyIndex) 
        public 
        view 
        returns (string memory, string memory) 
    {
        return (pendingDataToSend[index].key[keyIndex], pendingDataToSend[index].value[keyIndex]);
    }
    
    //Storage function
    function columnValue(address _address, string memory _description, string memory _key) 
        public 
        view 
        returns(string memory)
    {
        return Storage[_address][_description].column[_key];
    }

    function sourceLength()
        public
        view
        returns(uint32)
    {
        return uint32(dataSource.length);
    }

    function descriptionLength(address source)
        public
        view
        returns(uint32)
    {
        return uint32(descriptionsBySource[source].length);
    }

    function keysOfData(address src, string memory des)
        public
        view
        returns(string memory)
    {
        return Storage[src][des].keys;
    }

    function fetchValue(address src, string memory des, string memory key)
        public
        view
        returns(string memory)
    {
        return Storage[src][des].column[key];
    }
}