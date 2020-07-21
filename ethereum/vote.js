import web3 from './web3';
import vote from './build/vote.json';

export default (address)=>{
    return new web3.eth.Contract(vote.abi,address);
};