import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x51aCaF800380914fdd4eA455e4Ac7b769d40cCFe'
);

export default instance;