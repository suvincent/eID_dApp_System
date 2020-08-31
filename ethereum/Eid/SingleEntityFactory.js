import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0x0fC45422AeBe01f5c300fa6E17c63FC2070b5D31'
);

export default instance;