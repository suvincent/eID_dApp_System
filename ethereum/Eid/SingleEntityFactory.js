import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0x8ee339E4B92ea61dCa62B38B3a48f14a938B8432'
);

export default instance;