import web3 from '../web3';
import BallotCreator from './build/CreateEntity.json';

const instance = new web3.eth.Contract(
    BallotCreator.abi,
    '0xE8230029b0A32Ec532A6f2A8CC15D34198a0fB53'
);

export default instance;