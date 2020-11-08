import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x7f3ed0fC7DD0234f86ea0127eC040d8c814c68c3'
);

export default instance;