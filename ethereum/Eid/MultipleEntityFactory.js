import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x8800e92103B300C0c48D2A6994A499a79f052Af9'
);

export default instance;