import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0xA75C8d44ad00618ccE960511C37B69e64134B45c'
);

export default instance;