import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0x2b70717AF4aACa9c719Ef96944F5928732a677D5'
);

export default instance;