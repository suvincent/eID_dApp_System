import web3 from '../web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x98B106d4E115CaC7486119ed88E4C6c5D6B84F82'
);

export default instance;