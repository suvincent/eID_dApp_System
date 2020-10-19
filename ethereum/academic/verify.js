import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x7429403FAB19Adbf191d827EC3E680b5bD484914'
);

export default instance;