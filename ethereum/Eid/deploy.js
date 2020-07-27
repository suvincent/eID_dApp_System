const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const CreateEntity = require('./build/CreateEntity.json');

const provider = new HDWalletProvider(
  'lecture same cushion wine exchange foam smile impose mom cash liar thought',
  'https://rinkeby.infura.io/v3/02c60c85c73c4d36af98e316dfd72857'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(CreateEntity.abi)
    .deploy({ data: '0x' + CreateEntity.evm.bytecode.object })
    .send({ from: accounts[0]});

  console.log(CreateEntity.abi);
  console.log('Contract deployed to', result.options.address);
};
deploy();