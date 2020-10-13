import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0xE8e0b008b8c8513fE7f1de8D95755054BED6a74F'
);

export default instance;