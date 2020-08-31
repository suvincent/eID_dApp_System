import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0xa53cc92e2E49eEA57869314F04212D41eF9c329d'
);

export default instance;