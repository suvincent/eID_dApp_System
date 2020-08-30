const path = require('path')
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);


const entityPath = path.resolve(__dirname, 'contracts', 'Entity.sol')
const singleEntityPath = path.resolve(__dirname, 'contracts', 'SingleEntity.sol')
const multipleEntityPath = path.resolve(__dirname, 'contracts', 'MultipleEntity.sol')
const singleEntityFactoryPath = path.resolve(__dirname, 'contracts', 'SingleEntityFactory.sol')
const multipleEntityFactoryPath = path.resolve(__dirname, 'contracts', 'MultipleEntityFactory.sol')

const entitySource = fs.readFileSync(entityPath, 'utf8')
const singleEntitySource = fs.readFileSync(singleEntityPath, 'utf-8')
const multipleEntitySource = fs.readFileSync(multipleEntityPath, 'utf-8')
const singleEntityFactorySource = fs.readFileSync(singleEntityFactoryPath, 'utf-8')
const multipleEntityFactorySource = fs.readFileSync(multipleEntityFactoryPath, 'utf-8')



var input = {
    language: 'Solidity',
    sources: {
        'Entity.sol' : {
            content: entitySource
        },
        'SingleEntity.sol' : {
            content: singleEntitySource
        },
        'MultipleEntity.sol' : {
            content: multipleEntitySource
        },
        'SingleEntityFactory.sol' : {
            content: singleEntityFactorySource
        },
        'MultipleEntityFactory.sol' : {
            content: multipleEntityFactorySource
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

var outputjsarr = [ output.contracts['Entity.sol'], output.contracts['SingleEntity.sol'], 
    output.contracts['MultipleEntity.sol'],  output.contracts['SingleEntityFactory.sol'], 
    output.contracts['MultipleEntityFactory.sol'] ];
for(var i=0; i<5; i++){
    for(let contract in outputjsarr[i]){
        console.log(contract)
        fs.outputJSONSync(
            path.resolve(buildPath,contract+'.json'),
            outputjsarr[i][contract]
        );
    }
}
