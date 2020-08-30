const path = require('path')
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);

const entityPath = path.resolve(__dirname, 'contracts', 'Entity.sol')
const verifyPath = path.resolve(__dirname, 'contracts', 'Verify.sol')

const entitySource = fs.readFileSync(entityPath, 'utf-8')
const verifySource = fs.readFileSync(verifyPath, 'utf-8');



var input = {
    language: 'Solidity',
    sources: {
        'Entity.sol' : {
            content: entitySource
        },
        'Verify.sol' : {
            content: verifySource
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

var outputjsarr = [ output.contracts['Entity.sol'], output.contracts['Verify.sol'] ];
for(var i=0; i<5; i++){
    for(let contract in outputjsarr[i]){
        fs.outputJSONSync(
            path.resolve(buildPath,contract+'.json'),
            outputjsarr[i][contract]
        );
    }
}