import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0xC945E8b080b4b2eB744987dbad6EA832198E63e9'
);

export default instance;