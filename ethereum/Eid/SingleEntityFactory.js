import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0xcaFE3666837792950e60985EF7144FC5b599E489'
);

export default instance;