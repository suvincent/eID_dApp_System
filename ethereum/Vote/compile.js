
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
const inboxpath = path.resolve(__dirname, 'contracts', 'vote.sol');
const Eidpath = path.resolve(__dirname, 'contracts', 'Eid.sol');
const source = fs.readFileSync(inboxpath, 'UTF-8');
const Eidsource = fs.readFileSync(Eidpath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'vote.sol' : {
            content: source
        },
        'Eid.sol' : {
            content: Eidsource
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
//console.log(output.contracts['vote.sol']['Factory']);
var outputjs = output.contracts['vote.sol'];
for(let contract in outputjs){
    fs.outputJSONSync(
        path.resolve(buildPath,contract+'.json'),
        outputjs[contract]
    );
}
//exports.abi = output.contracts['vote.sol']['vote'].abi;
//exports.bytecode = output.contracts['vote.sol']['vote'].evm.bytecode.object;