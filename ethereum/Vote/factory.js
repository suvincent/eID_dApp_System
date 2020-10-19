import web3 from '../web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0xCc769E854d1CA190F26484290aCAAddAc9862B7f'
);

export default instance;