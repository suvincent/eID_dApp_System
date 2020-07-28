const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const verifyPath = path.resolve(__dirname, 'contracts', 'Verify.sol');
const source = fs.readFileSync(verifyPath, 'UTF-8');
//const output = solc.compile(source,1).contract;

var input = {
    language: 'Solidity',
    sources: {
        'Verify.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

fs.ensureDirSync(buildPath);

console.log(output);
var outputjs = output.contracts['Verify.sol'];
//console.log(outputjs);
for (let contract in outputjs) {
    //console.log(contract);
    fs.outputJsonSync(
        path.resolve(buildPath, contract + '.json'),
        outputjs[contract]
    );
}