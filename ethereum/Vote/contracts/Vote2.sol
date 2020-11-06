/*
test_vote/vote.sol

suvincent first commit
Latest commit f57eb8d 2 days ago
 History
 0 contributors
205 lines (177 sloc)  6.23 KB
  */
pragma solidity >= 0.6.0 < 0.7.0;
import "./Entity.sol";
import "./SingleEntity.sol";
import "./strings.sol";
//import "https://github.com/witnet/elliptic-curve-solidity/blob/master/contracts/EllipticCurve.sol";
import "./ECC.sol";
contract vote{
    ///////////////declaration
    
      uint256 public constant GX = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798;
      uint256 public constant GY = 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8;
      uint256 public constant AA = 0;
      uint256 public constant BB = 7;
      uint256 public constant PP = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F;
      
      uint256 public Vote_sum;
      uint256  Vote_sum_ECC_x;
      uint256  Vote_sum_ECC_y;
      
      uint256 public exponent;
      uint256 public m;
      
    address public owner;
    
    string public vote_question;//投票問題
    string[] public options;//投票選項
    uint public options_num;//選項長度

    uint[2] public times;//投票時間
    
    struct voter{
        address EOA_address;
        address registry_addr;//投票人EOA裡面的Registry Addr
        bool register_or_not;//身分驗證通過沒
        uint256 vote_value;//投票值
        int vote_time;//改過幾次了票了
    }
    struct rq{
        string requirement;
        uint rq_type;
    }
    mapping(address=>voter) public eligible_voter_list;
    address [] public  msgsender_voter_list;
    
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
        Vote_sum = 0;
        Vote_sum_ECC_x = GX;
        Vote_sum_ECC_y = GY;
        //options.push("請輸入選項");
    }
    /////////////modifier
    modifier isOwner() {
        SingleEntity stemp = SingleEntity(owner);
        require(stemp.isOwner(msg.sender));
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
    
    function set_up_all(string memory q ,uint vst,uint vet ,string memory rq_description ,address write_entity,uint256 exp,uint256 M)public isOwner{
        require(!isSet,"Set should have finished");
        vote_question = q;
        description = rq_description;
        times[0] = vst;
        times[1] = vet;
        write_entity_addr = write_entity;
        state = State.VOTE;
        exponent = exp;
        m = M;
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
        SingleEntity stemp = SingleEntity(e_addr);
        if(!stemp.isOwner(msg.sender)){return false;}
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
    function Add(uint a,uint b,uint c,uint d)public pure returns(uint256 ECC_checked_x,uint256 ECC_checked_y){
       (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecAdd(a,b,c,d,AA,PP);
    }
    function Mul(uint sum)public pure returns(uint256 ECC_checked_x,uint256 ECC_checked_y){
        (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecMul(sum,GX,GY,AA,PP);   
    }
    /////////// VOTE/////投票值/////////投票者
    //vote_value換成隨機值
    function Go_Vote(uint a, uint b ,uint256 v_value,address entity_addr)public checkInVoteStage{
        //////check 設定完成or not
            require(isSet,"Set is not Finish");
        //加密範例
        //msg.sender = 0x097F783e11482f5d05753c9619424171E8E8B3f6,0x21E6fe722e6FdF6fFb907A0cA873dDef779E997F,0xC60700B6AF7bacB7b3392d6c3a1bAe1a09a21E50
        //五位投票者假設的投票內容         [ 1, 9, 9 ]
        //隨機的五個值                     [ 55, 11, 75 ]
        //放在區塊鏈上的內容(投票值+隨機值) [ 56, 20, 84 ]
        //random 總和是需要被隱藏起來的 141
        ///////ban掉人數超過演算法限制的人數
            require(msgsender_voter_list.length < exponent ** m);
        ///////if EID身分驗證通過
            require(Validation(entity_addr));
        ///////目前先限制只能一人投一次票
            require(eligible_voter_list[entity_addr].vote_time == 0);
            eligible_voter_list[entity_addr].register_or_not = true;
        ///////if 第一次身分驗證通過
            if(eligible_voter_list[entity_addr].vote_time == 0){
                eligible_voter_list[entity_addr].registry_addr = entity_addr;
                eligible_voter_list[entity_addr].EOA_address = msg.sender;
                msgsender_voter_list.push(entity_addr);
            }
        //////if 身分驗證通過
            if(eligible_voter_list[entity_addr].register_or_not){
                eligible_voter_list[entity_addr].vote_value = v_value;
                eligible_voter_list[entity_addr].vote_time ++;
            }
        //////ECC 計算
        Vote_sum += v_value;
        // uint a;
        // uint b;
        // (a,b) = EllipticCurve.ecMul(v_random,GX,GY,AA,PP); 
        uint c = Vote_sum_ECC_x;
        uint d = Vote_sum_ECC_y;
        (Vote_sum_ECC_x,Vote_sum_ECC_y) = EllipticCurve.ecAdd(a,b,c,d,AA,PP); 
    }
    
    function checkECCMath(uint s)public view returns(bool){
        uint256 ECC_checked_x;
        uint256 ECC_checked_y;
        (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecMul(s+1,GX,GY,AA,PP);
        if((ECC_checked_x == Vote_sum_ECC_x) && (ECC_checked_y == Vote_sum_ECC_y)){
            return true;
        }
        else {
            return false;
        }
    }
    function tally(uint sum)public checkInTallyStage{
        require(isSet,"Set is not Finish");
        
        uint256 ECC_checked_x;
        uint256 ECC_checked_y;
        
        (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecMul(sum+1,GX,GY,AA,PP);
        
        uint256 temp = Vote_sum - sum;
        
        
        require(ECC_checked_x == Vote_sum_ECC_x);
        require(ECC_checked_y == Vote_sum_ECC_y);
        winner = -1;
        for(uint i = 0;i<result.length;i++){
            result[i] = 0;
        }
        //獲得各選項票數
        for(uint i = options_num-1;i+1>0;i--){
            result[i] = (int)(temp/(exponent ** (m*i)));
            temp -= (exponent ** (m*i))*uint256(result[i]);
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
        return msgsender_voter_list;
    }
    function return_voter_register_status(address sender)public view returns(bool){
        //require((state == State.TALLY)||(state == State.FINISH));
        return eligible_voter_list[sender].register_or_not;
    }
    function return_voter_vote_status(address sender)public view returns(uint){
        //require((state == State.TALLY)||(state == State.FINISH));
        return eligible_voter_list[sender].vote_value;
    }
}

contract Factory{
    vote[] public voting_pool;
    ////////////////這邊的addr都代表Entity
    mapping (address => vote []) public vote_create_by_myself_list;
    mapping (address => vote []) public vote_can_join_list;
    
    function create_vote(address addr)public  payable{
        //new vote and add to list
        vote new_vote =  new vote(addr);
        vote_create_by_myself_list[addr].push(new_vote);
    }
    
    function add_to_join_list(vote vote_can_join,address addr)public{
        vote_can_join_list[addr].push(vote_can_join);
    }
    
    function return_self_list(address sender)public view returns(vote[] memory){
        return vote_create_by_myself_list[sender];
    }
    
    function return_join_list(address sender)public view returns(vote[] memory){
        return vote_can_join_list[sender];
    }
}

