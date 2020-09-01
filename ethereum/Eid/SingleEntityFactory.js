import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0x3F45384B0dED3218c6a22bb658E1c646Ade1F14f'
);

export default instance;