import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '0xbDBd6377c494bfD0526d4Ef0FcbbeBc57Ea526B2'
);

export default instance;