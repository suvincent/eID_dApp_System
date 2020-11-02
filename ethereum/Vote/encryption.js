const {ModPoint,Curve} = require('simple-js-ec-math');
const paillier = require('paillier-js');
const random = require('random')


console.log("ballot 票種 投第一個選項 = exponent^(0*m) ,投第二個選項 = exponent^(1*m) ,投第三個選項 = exponent^(2*m)")
let Voter_num = 3;
let exponent = 3;
let m =2
console.log("exponent=",exponent)
console.log("m=",m);
let option_num = 2;
let ballot = [];
//console.log("五位投票者假設的投票內容",ballot)

let random_arr = [];
for (let i=0; i<Voter_num;i++){
   random_arr.push(random.int(0, 100))
   ballot.push(Math.pow(exponent,(random.int(0,option_num-1)*m)));
}

let mess_arr = [];
let random_sum = 0;
let mixed_sum = 0;
for(let i=0; i<Voter_num;i++){
    let r = random_arr[i]
    let v = ballot[i]
    mess_arr.push(r+v)
    random_sum += r
    mixed_sum += r+v
    //mess_arr.push(curve.multiply(g,r))
}
console.log("五位投票者假設的投票內容        ",ballot)
console.log("隨機的五個值                    ",random_arr);
console.log("放在區塊鏈上的內容(投票值+隨機值)",mess_arr);
console.log("random 總和是需要被隱藏起來的",random_sum);
//console.log("",mixed_sum);
console.log("所有投票值相加",mixed_sum-random_sum);
// create random keys
//const {publicKey, privateKey} = paillier.generateRandomKeys(2048);

//tally算票
tally_arr = [3];
totalCount = (mixed_sum-random_sum);
for (let i=option_num-1; i>=0;i--){
    tally_arr[i] =  Math.floor(totalCount/Math.pow(exponent,i*m));
    console.log("第",i,"選項得票數",tally_arr[i]," ",Math.pow(exponent,i*m));
    //console.log(Math.floor(totalCount/Math.pow(2,i*m)));
    totalCount -= Math.pow(exponent,i*m)*Math.floor(totalCount/Math.pow(exponent,i*m));
}


