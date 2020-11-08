import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0xFC2dF8f2a1355449dA6Eb611CEBe6A13e3e1cdE3'
);

export default instance;