import web3 from '../web3';
import BallotCreator from './build/BallotCreator.json';

const instance = new web3.eth.Contract(
    BallotCreator.abi,
    '0xf874FDA8283e81c11a62a27506353095BE26895A'
);

export default instance;