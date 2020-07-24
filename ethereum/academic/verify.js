import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0xF3737C8bA78960A43624298585519D1637652aD5'
);

export default instance;