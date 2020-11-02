import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0xa223DB498dF27D5576B535c84512b11b957969b2'
);

export default instance;