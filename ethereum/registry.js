import web3 from './web3';
import registry from './build/Registry.json';

export default (address)=>{
    return new web3.eth.Contract(registry.abi,address);
};