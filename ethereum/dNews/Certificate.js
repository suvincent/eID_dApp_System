import web3 from '../web3';
import Factory from './build/Certificate.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x068AbD765E41BdB164d34fe66b27d15c8e01ebe6'
);

export default instance;