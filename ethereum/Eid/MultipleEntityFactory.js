import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x5181E135Ce39dADdFa8D54Ee7e7FEA0f0202920D'
);

export default instance;