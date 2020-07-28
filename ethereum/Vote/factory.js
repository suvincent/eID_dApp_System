import web3 from '../web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x2f908F271cF2476334dd23983d465BfEd0Df2627'
);

export default instance;