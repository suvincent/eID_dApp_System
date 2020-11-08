import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x8535b4a108cBE1FB17fAfacd81e528ba47B4FA4e'
);

export default instance;