import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x02D6c61f1E8461B18e27c07D763809C0611Aca75'
);

export default instance;