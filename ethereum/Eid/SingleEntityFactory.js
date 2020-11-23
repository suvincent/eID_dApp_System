import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0x48290C3240ACa0Ae5C6e36dec058Fd1b3B92e90a'
);

export default instance;