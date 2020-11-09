import web3 from '../web3';
import Factory from './build/Certificate.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x507c807dD424b04C6550c83B94FBc093c58bED94'
);

export default instance;