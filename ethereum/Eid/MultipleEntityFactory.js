import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x88F61A5F1EA8795B1e494DEbb5E285C7C52357aB'
);

export default instance;