import web3 from './web3';
import Verify from './build/Verify.json';

const instance = new web3.eth.Contract(
    //JSON.parse(Verify.interface),
    Verify.abi,
    '0x3f43a8e82B8Ac4f3d8223a7EB204A909a3D46439'
);

export default instance;