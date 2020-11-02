import web3 from '../web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0xEfEF8522e3BbF8013b288FDC972Df8958B5cAc65'
);
//0xCc769E854d1CA190F26484290aCAAddAc9862B7f,0xE0B55884BDb62c64c51639cB5d949D09B150e2bb
export default instance;