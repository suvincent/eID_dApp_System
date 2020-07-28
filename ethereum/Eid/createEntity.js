import web3 from '../web3';
import CreateEntity from './build/CreateEntity.json';

const instance = new web3.eth.Contract(
    CreateEntity.abi,
    '0x07c52E5452F3115465916B7D8001d731D7eC8A19'
);

export default instance;