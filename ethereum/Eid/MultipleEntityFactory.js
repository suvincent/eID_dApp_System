import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x99aaA8e2101b5AF5C3c2Ba317aA1B3534df8eeF9'
);

export default instance;