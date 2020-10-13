const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const SingleEntityFactory = require('./build/SingleEntityFactory.json');
const MultipleEntityFactory = require('./build/MultipleEntityFactory.json');

const provider = new HDWalletProvider(
  'lecture same cushion wine exchange foam smile impose mom cash liar thought',
  'https://rinkeby.infura.io/v3/02c60c85c73c4d36af98e316dfd72857'
);
const web3 = new Web3(provider);



const deploy = async () => {
  console.log('Gas limit: ', await web3.eth.getBlock("latest"));
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const SEF = await new web3.eth.Contract(SingleEntityFactory.abi)
    .deploy({ data: '0x' + SingleEntityFactory.evm.bytecode.object })
    .send({ from: accounts[0]});

  const MEF = await new web3.eth.Contract(MultipleEntityFactory.abi)
    .deploy({ data: '0x' + MultipleEntityFactory.evm.bytecode.object })
    .send({ from: accounts[0]});

  console.log('SEF Contract deployed to', SEF.options.address);
  console.log('MEF Contract deployed to', MEF.options.address);
};
deploy();