import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x92669AB6a117cB361097bcB5DA5eb9d2aE91d154'
);

export default instance;