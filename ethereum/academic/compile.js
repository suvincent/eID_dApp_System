const path = require('path')
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);

const createEntityPath = path.resolve(__dirname, 'contracts', 'CreateEntity.sol')
const entityPath = path.resolve(__dirname, 'contracts', 'Entity.sol')
const registryPath = path.resolve(__dirname, 'contracts', 'Registry.sol')
const validationPath = path.resolve(__dirname, 'contracts', 'Validation.sol')
const verifyPath = path.resolve(__dirname, 'contracts', 'Verify.sol')

const createEntitySource = fs.readFileSync(createEntityPath, 'utf8')
const entitySource = fs.readFileSync(entityPath, 'utf-8')
const registrySource = fs.readFileSync(registryPath, 'utf-8')
const validationSource = fs.readFileSync(validationPath, 'utf-8')
const verifySource = fs.readFileSync(verifyPath, 'utf-8');



var input = {
    language: 'Solidity',
    sources: {
        'CreateEntity.sol' : {
            content: createEntitySource
        },
        'Entity.sol' : {
            content: entitySource
        },
        'Registry.sol' : {
            content: registrySource
        },
        'Validation.sol' : {
            content: validationSource
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

var outputjsarr = [ output.contracts['CreateEntity.sol'], output.contracts['Entity.sol'], output.contracts['Validation.sol'], output.contracts['Registry.sol'], output.contracts['Verify.sol'] ];
for(var i=0; i<5; i++){
    for(let contract in outputjsarr[i]){
        fs.outputJSONSync(
            path.resolve(buildPath,contract+'.json'),
            outputjsarr[i][contract]
        );
    }
}


/*
exports.abi = output.contracts['CreateEntity.sol']['CreateEntity'].abi;
exports.bytecode = output.contracts['CreateEntity.sol']['CreateEntity'].evm.bytecode.object;

*/