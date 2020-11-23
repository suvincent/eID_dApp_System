import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0x73C3Bfc72b630f5C44b2A3463c06357983D2DdBe'
);

export default instance;