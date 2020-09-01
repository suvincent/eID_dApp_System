import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x30E5f996Bc5961eE6BA5A14f8510d2935cEEfd6a'
);

export default instance;