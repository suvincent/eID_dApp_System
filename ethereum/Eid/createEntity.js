import web3 from '../web3';
import CreateEntity from './build/CreateEntity.json';

const instance = new web3.eth.Contract(
    CreateEntity.abi,
    '0x950BD33F71A716B0a6161eBC09Cd89F446698abf'
);

export default instance;