import web3 from '../web3';
import Factory from './build/Certificate.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x9EF36cCD15769efb82996AA33800B74EBA60613B'
);

export default instance;