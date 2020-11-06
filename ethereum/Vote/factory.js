import web3 from '../web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0xD2D32E5c949e869C58d67B4726EaeAffDBD53E5c'
);
//0xCc769E854d1CA190F26484290aCAAddAc9862B7f,0xE0B55884BDb62c64c51639cB5d949D09B150e2bb,0xEfEF8522e3BbF8013b288FDC972Df8958B5cAc65,0x97D1b00F76c7636aA6317846ca0cB678F7eC53bA
//0xC038B03FdE4B7ea7d481646a9294006590fcA417
export default instance;