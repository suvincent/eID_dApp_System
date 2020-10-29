import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0x42c4D643A15471C8b47e48a5323D937d8EF6387f'
);

export default instance;