import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x7aA682F92d819F1F7b17Fc10C18e05c5B808d823'
);

export default instance;