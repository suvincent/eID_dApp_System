import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0xA4818F3E2A1C315F45195C5f802FEEB2230D3F71'
);

export default instance;