import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x3e01a76427990F1b60D875f74774D570495c3CB8'
);

export default instance;