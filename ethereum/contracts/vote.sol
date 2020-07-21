/*
test_vote/vote.sol

suvincent first commit
Latest commit f57eb8d 2 days ago
 History
 0 contributors
205 lines (177 sloc)  6.23 KB
  */
pragma solidity >= 0.6.0 < 0.7.0;

//pragma solidity >= 0.6.0 < 0.7.0;

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
    
    mapping(address=>bytes32[]) public dataField;
    
    modifier isOwner() {
        require(msg.sender==owner);
        _;
    }
    
    
    // @param setOwner will be setuped in Creating Entity phase. For development, set it up yourself
    constructor() public {
        owner = msg.sender;
    }
    
    function writeFromOtherEntity(string memory data) public {
        dataField[msg.sender].push(keccak256(abi.encodePacked(data)));
    }
    
    function deleteDataByIndex(address entity, uint256 index) public isOwner {
        require(dataField[entity].length > index);
        dataField[entity][index] = dataField[entity][dataField[entity].length - 1];
        dataField[entity].pop();
    }
    
    function numberOfDataFromOneAddress(address _address) external view returns(uint256 length){
        return dataField[_address].length;
    }
    
    function return_array(address entity)public view returns(bytes32[] memory){
        return dataField[entity];
    }
    
}

contract mailbox{
    address public owner;
    vote [] public vote_create_by_myself_list;
    vote [] public vote_can_join_list;
    constructor(address setOwner) public {
        owner = setOwner;
    }
    
    function create_vote()public isOwner payable{
        //new vote and add to list
        vote new_vote =  new vote(msg.sender);
        vote_create_by_myself_list.push(new_vote);
    }
    
    function add_to_join_list(vote vote_can_join)public isOwner{
        vote_can_join_list.push(vote_can_join);
    }
    
    function return_self_list()public view returns(vote[] memory){
        return vote_create_by_myself_list;
    }
    
    function return_join_list()public view returns(vote[] memory){
        return vote_can_join_list;
    }
    
    modifier isOwner() {
        require(msg.sender==owner);
        _;
    }
}

contract vote{
    ///////////////declaration
    address public owner;
    
    string public vote_question;
    string[] public options;
    uint public options_num;
    /*
    uint public register_start_time;
    uint public register_end_time;
    uint public vote_start_time;
    uint public vote_end_time;
    */
    uint[4] public times;
    
    struct voter{
        Registry registry_addr;
        bool register_or_not;
        int vote_value;
        int vote_order;
    }
    mapping(address=>voter) public eligible_voter_list;
    int[]public vote_ballot;
    mapping(Registry=>bool) registry_used;
    address [] public  msgsender_voter_list;
    int public total_vote_num;
    
    bytes32 public requirement;
    
    int[]public result;
    int public winner;
    
    enum State {SETUP , REGISTRY , VOTE , TALLY , FINISH}
    State public state;
    //////////////constructor
    constructor(address setOwner)public {
        owner = setOwner;
        state = State.SETUP;
        total_vote_num = 0;
        winner = -1;
        options_num = 0;
    }
    /////////////modifier
    modifier isOwner() {
        require(msg.sender==owner);
        _;
    }
    ////////////SETUP
    function set_up_options(string memory o)public isOwner{
        require(state == State.SETUP);
        options.push(o);
        options_num++;
        result.push(0);
    }
    function return_options_length()public view returns(uint){
        return options_num;
    }
    function return_options(uint i)public view returns(string memory){
        return options[i];
    }
    function return_requirement()public view returns(bytes32){
        return requirement;
    }
    function return_stage()public view returns(State){
        return state;
    }
    function set_up_all(string memory q , uint rst ,uint ret , uint vst,uint vet ,string memory rq)public isOwner  payable{
        require(state == State.SETUP);
        vote_question = q;
        requirement = keccak256(abi.encodePacked(rq));///hash string才能做string compare
        times[0] = rst;
        times[1] = ret;
        times[2] = vst;
        times[3] = vet;
        
        ////看要不要寫個檢查的
        
    }
    function return_time()public view returns(uint[4]memory){
        return times;
    }
    function return_question()public view returns(string memory){
        return vote_question;
    }
    function set_can_register()public isOwner{
        require(state == State.SETUP);
        state = State.REGISTRY;
    }
    //function edit_setting(string item,string changedata)public isOwner{
        ////////////之後再寫
    //}
    /////////// REGISTRY
    function register (bytes32 attr,Registry _registry_addr)public{
        require(state == State.REGISTRY);
        require(!registry_used[_registry_addr]);
        //require(now>register_start_time);
        //require(now<register_end_time);
        if(attr == requirement){
            eligible_voter_list[msg.sender].register_or_not = true;
            eligible_voter_list[msg.sender].vote_value = -1;
            eligible_voter_list[msg.sender].registry_addr = _registry_addr;
            registry_used[_registry_addr] = true;
            msgsender_voter_list.push(msg.sender);
        }
        
    }
    function set_can_vote()public isOwner{
        require(state == State.REGISTRY);
        state = State.VOTE;
        
    }
    function return_msgsender_voter_list()public view returns (address [] memory){
        return msgsender_voter_list;
    }
    function return_voter_register_status(address sender)public view returns(bool){
        //require((state == State.TALLY)||(state == State.FINISH));
        return eligible_voter_list[sender].register_or_not;
    }
    function return_voter_register_used(Registry sender)public view returns(bool){
        //require((state == State.TALLY)||(state == State.FINISH));
        return registry_used[sender];
    }
    function return_voter_vote_status(address sender)public view returns(int){
        //require((state == State.TALLY)||(state == State.FINISH));
        return eligible_voter_list[sender].vote_value;
    }
    /////////// VOTE
    function can_vote(int v_value)public {
        require(state == State.VOTE);
        require(eligible_voter_list[msg.sender].register_or_not);
        //require(now>vote_start_time);
        //require(now<vote_end_time);
        if(eligible_voter_list[msg.sender].vote_value == -1 ){
            eligible_voter_list[msg.sender].vote_value = v_value;
            vote_ballot.push(v_value);
            eligible_voter_list[msg.sender].vote_order = int(vote_ballot.length);
        }
    }
    function set_can_tally()public isOwner{
        require(state == State.VOTE);
        state = State.TALLY;
    }
    /////////// TALLY
    function compute()public payable{
        require((state == State.TALLY)||(state == State.FINISH));
        for(uint i = 0; i< vote_ballot.length;i++){
                uint temp = uint(vote_ballot[i]);
                result[temp]++ ;   
        }
        for(uint i = 0;i<result.length;i++){
            if(result[i] > winner){
                winner = int(i);
            }
        }
        state = State.FINISH;
    }
    function write_winner(int w)public isOwner{
        winner = w;
    }
    function return_winner()public view returns(string memory){
        return options[uint(winner)];
    }
    function return_result()public view returns(int[] memory){
        return result;
    }
    function return_ballot()public view returns(int[] memory){
        return vote_ballot;
    }
    /////////// FINISH
    
}

contract Factory{
    mapping(address=>mailbox) public addr_Field;
    function create_mailbox()public{
        //new a mailbox
        mailbox n_mail_box = new mailbox(msg.sender);
        addr_Field[msg.sender] = n_mail_box;
    }
    function return_addr(address sender)public view returns(mailbox){
        return addr_Field[sender];
    }
}

