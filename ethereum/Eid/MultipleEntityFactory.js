import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0xF917F02695f8266dc6787E7E72FB62BA315143D2'
);

export default instance;