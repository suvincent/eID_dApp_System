import web3 from '../web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x6BFeec5E57beF2d7fA29fa3e271599D1015a4DA5'
);

export default instance;