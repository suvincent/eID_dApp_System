import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0xc7FfD002bf9857831c2B9ed6E15d53a293c7B630'
);

export default instance;