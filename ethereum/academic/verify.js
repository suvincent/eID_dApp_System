import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0xE85d317489947d0E2AcA866e9e495bCD36259F18'
);

export default instance;