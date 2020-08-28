import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x89FaFd4862eA60c99c4CaF2aE5aAb50F91961E7c'
);

export default instance;