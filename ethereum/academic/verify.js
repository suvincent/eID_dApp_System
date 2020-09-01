import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x192037DC49D56C8B56Fe5Fc17F7afeb28819655B'
);

export default instance;