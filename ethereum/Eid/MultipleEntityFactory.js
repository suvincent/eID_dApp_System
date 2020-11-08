import web3 from '../web3';
import MultipleEntityFactory from './build/MultipleEntityFactory.json';

const instance = new web3.eth.Contract(
    MultipleEntityFactory.abi,
    '0xdea844C59EdaD046A9742A43F86b6cc71b4A9486'
);

export default instance;