import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x6aD0B1483A31D52d8a63405a760c63BaA547436C'
);

export default instance;