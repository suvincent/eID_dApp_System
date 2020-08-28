pragma solidity >= 0.6;


contract Entity {
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
        string[] value;
        bool approved;
    }


    
    modifier accessGranted virtual {
        _;
    }
    
    modifier multipleControl(uint index) virtual {
        _;
    }
    
    //Identifier
    bool constant public isEntity = true;
    bool isSingle;
    
    //Storage Variables
    mapping(address=>mapping(string=>storingData)) public Storage;
    address[] public dataSource;
    mapping(address=>string[]) public descriptionsBySource; 
    
    //Receiving Data Variables
    pendingData[] public pendingDataToReceive; 
    mapping(uint=>bool) toReceiveIsConfirmed;
    
    //Sending Data Variables
    pendingData[] public pendingDataToSend;
    
    //Receiving Data Functions
    function _newData(string calldata _description)
        external 
        returns(uint256) 
    {
        pendingData memory newData;
        newData.source = msg.sender;
        newData.description = _description;
        newData.approved = false;
        pendingDataToReceive.push(newData);
        return pendingDataToReceive.length - 1;
    }
    
    function _receiveData(string calldata _key, string calldata _value, uint256 index)
        external 
    {
        pendingDataToReceive[index].value.push(_value);
        pendingDataToReceive[index].key.push(_key);
    }
    
    function _approveDataToReceive(uint256 index) 
        internal
    {
        require(!pendingDataToReceive[index].approved);
        storingData storage toApprove = Storage[pendingDataToReceive[index].source][pendingDataToReceive[index].description];
        for(uint256 i=0; i<pendingDataToReceive[index].key.length; i++){
            toApprove.column[pendingDataToReceive[index].key[i]] = pendingDataToReceive[index].value[i];
            toApprove.keys = string(abi.encodePacked(
                toApprove.keys,
                ", ",
                pendingDataToReceive[index].key[i]));
        }
        dataSource.push(pendingDataToReceive[index].source);
        descriptionsBySource[pendingDataToReceive[index].source].push(pendingDataToReceive[index].description);
        pendingDataToReceive[index].approved = true;
    }
    
    function approveDataToReceive(uint256 index)
        public
        accessGranted
        multipleControl(index)
    {
        if(toReceiveIsConfirmed[index] || isSingle){
            _approveDataToReceive(index);
        }
    }
    
    function approveMultipleToReceive(address multipleEntity, uint256 index)
        public
        accessGranted
    {
        Entity mE = Entity(multipleEntity);
        mE.approveDataToReceive(index);
    }
    
    function pendingDataToReceiveCount() 
        public 
        view 
        returns(uint256) 
    {
        return pendingDataToReceive.length;
    }
    
    function dataSizeToReceive(uint index) 
        public 
        view 
        returns (uint256) 
    {
        return pendingDataToReceive[index].key.length;
    }
    
    function keyValueOfDataToReceive(uint index, uint keyIndex)
        public
        view
        returns (string memory, string memory)
    {
        return (pendingDataToReceive[index].key[keyIndex], pendingDataToReceive[index].value[keyIndex]);
    }
    
    //Sending Data Functions
    function newDataToSend(address _receiver, string memory _description) 
        accessGranted
        public 
        returns(uint256) 
    {
        pendingData memory newData;
        newData.destination = _receiver;
        newData.description = _description;
        newData.approved = false;
        pendingDataToSend.push(newData);
        return pendingDataToSend.length - 1;
    }
    
    function newDataMultipleToSend(address multipleEntity, address _receiver, string memory _description)
        accessGranted
        public
        returns(uint256) 
    {
        Entity me = Entity(multipleEntity);
        me.newDataToSend(_receiver, _description);
    }
    
    function addDataToSend(string memory _key, string memory _value, uint256 index) 
        accessGranted
        public 
    {
        pendingDataToSend[index].key.push(_key);
        pendingDataToSend[index].value.push(_value);
    }
    
    function addDataMultipleToSend(address multipleEntity, string memory _key, string memory _value, uint256 index) 
        accessGranted
        public 
    {
        Entity me = Entity(multipleEntity);
        me.addDataToSend(_key, _value, index);
    }
    
    function approveDataToSend(uint256 index) 
        accessGranted
        public 
    {
        require(!pendingDataToSend[index].approved);
        Entity receiver = Entity(pendingDataToSend[index].destination);
        uint256 idx = receiver._newData(pendingDataToSend[index].description);
        for(uint8 i=0; i<pendingDataToSend[index].key.length; i++){
            receiver._receiveData(pendingDataToSend[index].key[i], pendingDataToSend[index].value[i], idx);
        }
    }
    
    function approveMultipleToSend(address multipleEntity, uint256 index)
        accessGranted
        public
    {
        Entity me = Entity(multipleEntity);
        me.approveDataToSend(index);
    }
    
    function pendingDataToSendCount() 
        public 
        view 
        returns(uint256) 
    {
        return pendingDataToSend.length;
    }
    
    function dataSizeToSend(uint index) 
        public 
        view 
        returns (uint256) 
    {
        return pendingDataToSend[index].key.length;
    }
    
    function keyValueOfDataToSend(uint index, uint keyIndex) 
        public 
        view 
        returns (string memory, string memory) 
    {
        return (pendingDataToSend[index].key[keyIndex], pendingDataToSend[index].value[keyIndex]);
    }
    
    function columnValue(address _address, string memory _description, string memory _key) 
        public 
        view 
        returns(string memory)
    {
        return Storage[_address][_description].column[_key];
    }
}