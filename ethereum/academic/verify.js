import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x3Cce879Cd8c63048840e9010C42c6b2027179EC1'
);

export default instance;