import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0xc42E18179B38b148487a07dF8092dF5a51F533B0'
);

export default instance;