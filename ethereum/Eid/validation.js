import web3 from '../web3';
import Validation from './build/Validation.json';

export default (address) => {
    return new web3.eth.Contract(
    Validation.abi,
    address
);
}