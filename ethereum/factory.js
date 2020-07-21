import web3 from './web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0xA3508D7Ab1A924935d65D21cEAB78915804D567e'
);

export default instance;