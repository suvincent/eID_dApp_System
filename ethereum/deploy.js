const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/Factory.json');
//這邊只要deploy factory就好了！

const provider = new HDWalletProvider(
    'drill blur six hub elder curve truth vessel village delay express sniff',
    'https://rinkeby.infura.io/v3/70c54a37736c4698951498533c361e3c'
);
const web3 = new Web3(provider);

const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('attempt to deploy from account',accounts[0]);
    const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({data:compiledFactory.evm.bytecode.object})
    .send({from: accounts[0]});
    
    console.log('Contract deploy to',result.options.address);
};
deploy();