import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0xC71e1547613c30cAB80F0f351a679f31dd83979A'
);

export default instance;