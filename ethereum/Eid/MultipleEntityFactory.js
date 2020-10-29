import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x5DfEE1071F323ddca9751EA6E7D66668fc5cE796'
);

export default instance;