const path = require('path')
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);

const stringsPath = path.resolve(__dirname, 'contracts', 'strings.sol')
const entityPath = path.resolve(__dirname, 'contracts', 'Entity.sol')
const dnewsPath = path.resolve(__dirname, 'contracts', 'dNews_entity.sol')

const stringsSource = fs.readFileSync(stringsPath, 'utf8')
const entitySource = fs.readFileSync(entityPath, 'utf-8')
const dnewsSource = fs.readFileSync(dnewsPath, 'utf-8');



var input = {
    language: 'Solidity',
    sources: {
        'Entity.sol' : {
            content: entitySource
        },
        'strings.sol' :{
            content: stringsSource
        },
        'dNews_entity.sol' : {
            content: dnewsSource
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        },
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
fs.ensureDirSync(buildPath);

var outputjsarr = [ output.contracts['Entity.sol'], output.contracts['dNews_entity.sol'] ];
for(var i=0; i<5; i++){
    for(let contract in outputjsarr[i]){
        fs.outputJSONSync(
            path.resolve(buildPath,contract+'.json'),
            outputjsarr[i][contract]
        );
    }
}