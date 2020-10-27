import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0x70Ebf11f96cf26a326956A17221582351df77668'
);

export default instance;