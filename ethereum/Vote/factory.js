import web3 from '../web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0xcceB250f55E9dF16feDB038c9C0f6d2651958F42'
);

export default instance;