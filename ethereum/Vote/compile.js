
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');//fs-extra比fs module多一些功能的樣子
/*


const campaignPath = path.resolve(__dirname,'contracts','vote.sol');
const source = fs.readFileSync(campaignPath,'utf8');
const output = solc.compile(source,1).contract;

fs.ensureDirSync(buildPath);
console.log(output);
for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath,contract.replace(':','')+'.json'),
        output[contract]
    );
}
*/
const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);
//就是清掉build裡面的東西包括folder
const inboxpath = path.resolve(__dirname, 'contracts', 'Vote2.sol');
const apath = path.resolve(__dirname, 'contracts', 'ECC.sol');
const source = fs.readFileSync(inboxpath, 'UTF-8');
const asource = fs.readFileSync(apath, 'UTF-8');
const entityPath = path.resolve(__dirname, 'contracts', 'Entity.sol')
const singleEntityPath = path.resolve(__dirname, 'contracts', 'SingleEntity.sol')
const stringsPath = path.resolve(__dirname, 'contracts', 'strings.sol')
const stringsSource = fs.readFileSync(stringsPath, 'utf8')
const entitySource = fs.readFileSync(entityPath, 'utf8')
const singleEntitySource = fs.readFileSync(singleEntityPath, 'utf-8')

var input = {
    language: 'Solidity',
    sources: {
        'Vote2.sol' : {
            content: source
        },
        'ECC.sol' : {
            content: asource
        },
        'Entity.sol' : {
            content: entitySource
        },
        'strings.sol' :{
            content: stringsSource
        },
        'SingleEntity.sol' : {
            content: singleEntitySource
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
console.log(output);
//console.log(output.contracts['vote.sol']['Factory']);
var outputjsarr = [ output.contracts['Vote2.sol']/*, output.contracts['a.sol']*/ ];
//var outputjs = output.contracts['vote.sol'];
for(let i = 0; i < 1;i++){
    for(let contract in outputjsarr[i]){
        console.log(contract);
        fs.outputJSONSync(
            path.resolve(buildPath,contract+'.json'),
            outputjsarr[i][contract]
        );
    }
}
//exports.abi = output.contracts['vote.sol']['vote'].abi;
//exports.bytecode = output.contracts['vote.sol']['vote'].evm.bytecode.object;