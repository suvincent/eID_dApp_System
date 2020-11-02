import web3 from '../web3';
import Factory from './build/Certificate.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x22b1DFb667320fEF3AAd04Dcbc955548F1FDcAF7'
);

export default instance;