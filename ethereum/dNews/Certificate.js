import web3 from '../web3';
import Factory from './build/Certificate.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x8cD9fdF4e2b4120a557440fd49C51644dEe1E8aE'
);

export default instance;