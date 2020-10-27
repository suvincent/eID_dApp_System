import web3 from '../web3';
import SingleEntityFactory from './build/SingleEntityFactory.json';

const instance = new web3.eth.Contract(
    SingleEntityFactory.abi,
    '8a027AE7eA44EA1a203D9E9141ecD462972cb341'
);

export default instance;