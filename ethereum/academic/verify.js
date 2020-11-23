import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x50C70707181f086E9566C2311EE97166d8F3aFd2'
);

export default instance;