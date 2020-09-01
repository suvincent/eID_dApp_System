import web3 from '../web3';
import Factory from './build/Certificate.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x1f1B52c1e3bDC79D89312731628fCf76163f97fd'
);

export default instance;