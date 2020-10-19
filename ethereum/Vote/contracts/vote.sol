/*
test_vote/vote.sol

suvincent first commit
Latest commit f57eb8d 2 days ago
 History
 0 contributors
205 lines (177 sloc)  6.23 KB
  */
pragma solidity >= 0.6.0 < 0.7.0;
import "./Eid.sol";
import "./a.sol";

contract vote{
    ///////////////declaration
    using ECCMath for *;
    using Secp256k1 for *;
    address public owner;
    
    string public vote_question;//投票問題
    string[] public options;//投票選項
    uint public options_num;//選項長度

    uint[2] public times;//投票時間
    
    struct voter{
        address EOA_address;
        address registry_addr;//投票人EOA裡面的Registry Addr
        bool register_or_not;//身分驗證通過沒
        int vote_value;//投票值
        int vote_time;//改過幾次了票了
    }
    struct rq{
        string requirement;
        uint rq_type;
    }
    mapping(address=>voter) public eligible_voter_list;
    address [] public  entity_voter_list;
    
    address public write_entity_addr;//registry的寫入單位應該為誰ex.內政部
    string public description;
    mapping(string => rq) public requirements;//投票的身分條件
    string[] public requirements_key;//投票的條件欄位
    
    int[]public result;
    int public winner;
    string public win_option;
    
    enum State {SETUP , VOTE , TALLY , FINISH}
    State public state;
    bool public isSet;
    //////////////constructor
    constructor(address setOwner)public {
        owner = setOwner;
        state = State.SETUP;
        winner = -1;
        options_num = 0;
        isSet = false;
        //options.push("請輸入選項");
    }
    /////////////modifier
    modifier isOwner() {
        require(msg.sender==owner);
        _;
    }
    
    function blockOrTimeReached(uint i)public view returns(bool){
        if(i == 0){//////////////Setting
            if(now * 1000 < times[0])return true;
            else return false;
        }
        else if(i == 1){/////////Vote
            if((now * 1000 < times[1])&& (now *1000> times[0]))return true;
            else return false;
        }
        else if(i == 2){/////////Tally
            if(1000 * now> times[1])return true;
            else return false;
        }
        else return false;
    }
    modifier checkInVoteStage() {
        require(blockOrTimeReached(1));
        _;

    }
    modifier checkInTallyStage() {
        require(blockOrTimeReached(2));
        _;

    }
    
    ////////////SETUP
    function set_up_options(string memory o)public isOwner{
        require(!isSet,"Can not Set");
        options.push(o);
        options_num++;
        result.push(0);
    }

    function set_up_requirement(string memory _key,string memory _value, uint _type)public isOwner{
        require(!isSet,"Set should have finished");
        rq memory temp;
        temp.requirement = _value;
        temp.rq_type = _type;
        requirements[_key] = temp;
        requirements_key.push(_key);
    }
    
    function set_up_all(string memory q ,uint vst,uint vet ,string memory rq_description ,address write_entity)public isOwner{
        require(!isSet,"Set should have finished");
        vote_question = q;
        description = rq_description;
        times[0] = vst;
        times[1] = vet;
        write_entity_addr = write_entity;
        state = State.VOTE;
    }
    function SetFinish()public isOwner{
        require(!isSet,"Set should have finished");
        isSet = true;
    }
    /////////// Validation
    function stringToUint(string memory s)public pure returns (uint) {
        bytes memory b = bytes(s);
        uint i;
        uint temp = 0;
        for (i = 0; i < b.length; i++) {
            uint c = uint(uint8(b[i]));
            if (c >= 48 && c <= 57) {
                temp = temp * 10 + (c - 48);
            }
        }
        return temp;
    }
    function Validation(address e_addr)public view returns (bool){
        Entity temp = Entity(e_addr);
        for(uint i = 0;i<requirements_key.length;i++){
            if(requirements[requirements_key[i]].rq_type == 0){////比相等
                if(keccak256(abi.encodePacked(requirements[requirements_key[i]].requirement)) != keccak256(abi.encodePacked(temp.columnValue(write_entity_addr,description,requirements_key[i])))){
                    return false;
                }
            }
            else if(requirements[requirements_key[i]].rq_type == 1){////比大於
                uint temp1 = stringToUint(requirements[requirements_key[i]].requirement);//條件
                uint temp2 = stringToUint(temp.columnValue(write_entity_addr,description,requirements_key[i]));//entity值
                if(temp1>temp2){
                    return false;
                }
            }
            else if(requirements[requirements_key[i]].rq_type == 2){////比小於
                uint temp1 = stringToUint(requirements[requirements_key[i]].requirement);//條件
                uint temp2 = stringToUint(temp.columnValue(write_entity_addr,description,requirements_key[i]));//entity值
                if(temp1<temp2){
                    return false;
                }
            }
        }
        return true;
    }
    /////////// VOTE/////投票值/////////投票者
    function Go_Vote(int v_value,address entity_addr)public checkInVoteStage{
        require(isSet,"Set is not Finish");
        //issue 現在mapping中放的entity address應該用查的不該自行輸入，之後要改
        ///////EOA連接EID
        ///////等create entity完成
   
        ///////if EID身分驗證通過
            require(Validation(entity_addr));
            eligible_voter_list[entity_addr].register_or_not = true;
        ///////if 第一次身分驗證通過
            if(eligible_voter_list[entity_addr].vote_time == 0){
                eligible_voter_list[entity_addr].registry_addr = entity_addr;
                eligible_voter_list[entity_addr].EOA_address = msg.sender;
                entity_voter_list.push(entity_addr);
            }
        //////if 身分驗證通過
            if(eligible_voter_list[entity_addr].register_or_not){
                eligible_voter_list[entity_addr].vote_value = v_value;
                eligible_voter_list[entity_addr].vote_time ++;
            }
    }
    /////////// TALLY
    function compute()public checkInTallyStage{
        require(isSet,"Set is not Finish");
        ///////先將結果投票歸零
        for(uint i = 0;i<result.length;i++){
            result[i] = 0;
        }
        ///////將每個投票結果計算
        for(uint i = 0; i< entity_voter_list.length;i++){
                address sender = entity_voter_list[i];
                uint temp = uint(eligible_voter_list[sender].vote_value);
                result[temp]++ ;   
        }
        //////比較每個選項各得幾票
        for(uint i = 0;i<result.length;i++){
            if(result[i] > winner){
                winner = int(i);
            }
        }
        win_option = options[uint(winner)];
    }    
    /////////////////////////////////////view function
    function return_result()public view returns(int[] memory){
        return result;
    }
    function return_requirements_key(uint index)public view returns(string memory){
        return requirements_key[index];
    }
    function return_requirements_rq(string memory temp)public view returns(string memory){
        return requirements[temp].requirement;
    }
    function return_requirements_type(string memory temp)public view returns(uint){
        return requirements[temp].rq_type;
    }
    function return_requirements_length()public view returns(uint){
        return requirements_key.length;
    }
    function return_msgsender_voter_list()public view returns (address [] memory){
        return entity_voter_list;
    }
    function return_voter_register_status(address sender)public view returns(bool){
        //require((state == State.TALLY)||(state == State.FINISH));
        return eligible_voter_list[sender].register_or_not;
    }
    function return_voter_vote_status(address sender)public view returns(int){
        //require((state == State.TALLY)||(state == State.FINISH));
        return eligible_voter_list[sender].vote_value;
    }
}

contract Factory{
    vote[] public voting_pool;
    mapping (address => vote []) public vote_create_by_myself_list;
    mapping (address => vote []) public vote_can_join_list;
    
    function create_vote()public{
        //new vote and add to list
        vote new_vote =  new vote(msg.sender);
        vote_create_by_myself_list[msg.sender].push(new_vote);
        voting_pool.push(new_vote);
    }
    
    function add_to_join_list(vote vote_can_join)public{
        vote_can_join_list[msg.sender].push(vote_can_join);
    }
    
    function return_self_list(address sender)public view returns(vote[] memory){
        return vote_create_by_myself_list[sender];
    }
    
    function return_join_list(address sender)public view returns(vote[] memory){
        return vote_can_join_list[sender];
    }
    function return_voting_pool()public view returns(vote[] memory){
        return voting_pool;
    }
}

