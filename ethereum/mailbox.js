import web3 from './web3';
import mailbox from './build/mailbox.json';

export default (address)=>{
    return new web3.eth.Contract(mailbox.abi,address);
};