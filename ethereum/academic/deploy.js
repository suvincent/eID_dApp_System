const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledVerify = require('./build/Verify.json');

const provider = new HDWalletProvider(
    'grass chair tide text wall subject guitar loop liar actress logic swamp',
    'https://rinkeby.infura.io/v3/1c223290588542dba4cb02720d1a5826'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attemppting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(compiledVerify.abi)
        .deploy({ data: '0x' + compiledVerify.evm.bytecode.object })
        //.deploy({ data: '0x' + compiledVerify.bytecode })
        .send({ from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();

//