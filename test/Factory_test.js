const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider(), null, { transactionConfirmationBlocks: 1 });

const compiledFactory = require('../ethereum/Vote/build/Factory.json');
const compiledCampaign = require('../ethereum/Vote/build/mailbox.json');
const compiledvote = require('../ethereum/Vote/build/vote.json');
const compiledregistry = require('../ethereum/Vote/build/Registry.json');
//console.log(compiledFactory.abi);
let accounts;
let factory;
let mailboxAddress;
let mailbox;
let voteAddress;
let vote;
let registryAddr;
let registry1;
let registry2;
let registry3;

/**
 * 假設account[0] 是選舉的admin
 * 然後有內政部可以設定人的registry
 * account[1,2,3] 是選民這樣
 */
beforeEach (async ()=>{
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(compiledFactory.abi)
     .deploy({data:compiledFactory.evm.bytecode.object})
     .send({ from :accounts[0],gas:'3000000'});
    //其實create vote是create mailbox...
    await factory.methods.create_mailbox().send({
        from:accounts[0],
        gas:'3000000'
     });
    //const addresses =  await factory.methods.getdeployedCampaign().call();
    //campaignAddress = addresses[0];等於下面的打法
    mailboxAddress = await factory.methods.return_addr(accounts[0]).call();
    mailbox = await new web3.eth.Contract(compiledCampaign.abi,mailboxAddress);
    //因為已經deployed過了所以不需要再deployed跟send
    await mailbox.methods.create_vote().send({
        from:accounts[0],
        gas:'3000000'
     });
     //voteAddress = addresses[0];等於下面的打法
    [voteAddress] = await mailbox.methods.return_self_list().call();
    vote = await new web3.eth.Contract(compiledvote.abi,voteAddress);

    registry1 = await new web3.eth.Contract(compiledregistry.abi)
     .deploy({data:compiledregistry.evm.bytecode.object})
     .send({ from :accounts[1],gas:'3000000'});
    registry2 = await new web3.eth.Contract(compiledregistry.abi)
     .deploy({data:compiledregistry.evm.bytecode.object})
     .send({ from :accounts[2],gas:'3000000'});
    registry3 = await new web3.eth.Contract(compiledregistry.abi)
     .deploy({data:compiledregistry.evm.bytecode.object})
     .send({ from :accounts[3],gas:'3000000'});

    await registry3.methods.writeFromOtherEntity('human').send({
        from :accounts[4],
        gas:'3000000'
    });
});


describe('Vote Campaigns',()=>{
    //確定可以deploy
    it('deploys a factory and a vote',()=>{
        //console.log(accounts[0]);
        //assert.equal(1,1);
        assert.ok(factory.options.address);
        assert.ok(mailbox.options.address);
    });
    //確定選舉的admin是自己
    it('make caller as the vote manager',async()=>{
        const mailowner = await mailbox.methods.owner().call();
        const voteowner = await vote.methods.owner().call();
        assert.equal(accounts[0],mailowner);
        assert.equal(accounts[0],voteowner);
    });
    //確定可以做投票設定
    it('assure can make setting',async()=>{
        await vote.methods.set_up_all('can I sleep now ?',1,2,3,4,'human').send({
            from :accounts[0],
            gas:'3000000'
        });
        const check_rq = await vote.methods.vote_question().call();
        assert.equal("can I sleep now ?",check_rq);
        //assert.equal(true,isContributor);用下面的也可以
        //assert(isContributor);
    });
    //確定可以加入選項
    it('assure can set option',async()=>{
        await vote.methods.set_up_options('Yes').send({
            from :accounts[0],
            gas:'3000000'
        });
        await vote.methods.set_up_options('No').send({
            from :accounts[0],
            gas:'3000000'
        });
        const length = await vote.methods.return_options_length().call();
        const check_op1 = await vote.methods.return_options(0).call();
        const check_op2 = await vote.methods.return_options(1).call();
        assert.equal("Yes",check_op1);
        assert.equal("No",check_op2);
        assert.equal(2,length);
    });
    //確定可以register值進registry
    it('can set attribute into registry',async()=>{
            await registry1.methods.writeFromOtherEntity('human').send({
                from :accounts[4],
                gas:'3000000'
            });
            await registry2.methods.writeFromOtherEntity('human').send({
                from :accounts[4],
                gas:'3000000'
            });
            
            let r1 =await registry1.methods.return_array(accounts[4]).call();
            let r2 =await registry2.methods.return_array(accounts[4]).call();
            let r3 =await registry3.methods.return_array(accounts[4]).call();
        //console.log(r1[0]);
        assert.equal(r1[0],r2[0]);
        assert.equal(r2[0],r3[0]);
    });
    //確定註冊錯會失敗
    it('assure can register with wrong input',async()=>{
        try {
            //這是測壞的input
            await vote.methods.register('0x42144640c7cb5ff8aa9595ae175ffcb6dd152db6e737c13cc2d5d07576967021',registry1).send({
                from:accounts[1],
                gas:'3000000'
            });
            assert(false);
        } catch (error) {
            assert(error);
        }
        
    });
    //確定可以註冊投票
    it('assure can register',async()=>{
        await vote.methods.set_up_all('can I sleep now ?',1,2,3,4,'human').send({
            from :accounts[0],
            gas:'3000000'
        });
        let r3 =await registry3.methods.return_array(accounts[4]).call();
        //console.log(r3[0]);
        //console.log(registry3.options.address);
        await vote.methods.set_can_register().send({
            from:accounts[0],
            gas:'3000000'
        });
        let state =await vote.methods.return_stage().call();
        //console.log(state);
        let rq =await vote.methods.return_requirement().call();
        //console.log("rq : ",rq);
        await vote.methods.register(r3[0],registry1.options.address).send({
            from:accounts[1],
            gas:'3000000'
        });
        let used = await vote.methods.return_voter_register_used(registry1.options.address).call();
        //console.log(used);
        //要再寫個確定的到底有沒有註冊成功的assertion
        let ok = await vote.methods.return_voter_register_status(accounts[1]).call();
        let ko = await vote.methods.return_voter_vote_status(accounts[1]).call();
        //console.log(ko);
        assert(ok);
    });
    //確定可以投票
    it('go to vote stage',async()=>{
        await vote.methods.set_up_all('can I sleep now ?',1,2,3,4,'human').send({
            from :accounts[0],
            gas:'3000000'
        });
        let r3 =await registry3.methods.return_array(accounts[4]).call();
        //console.log(r3[0]);
        //console.log(registry3.options.address);
        await vote.methods.set_can_register().send({
            from:accounts[0],
            gas:'3000000'
        });
        await vote.methods.register(r3[0],registry1.options.address).send({
            from:accounts[1],
            gas:'3000000'
        });
        await vote.methods.set_can_vote().send({
            from:accounts[0],
            gas:'3000000'
        });
        await vote.methods.can_vote(0).send({
            from:accounts[1],
            gas:'3000000'
        });
        let v =  await vote.methods.return_voter_vote_status(accounts[1]).call();
        //console.log(v);
        assert(v,0);
    });
    //tally
    it('go to tally stage',async()=>{
        try{
            await vote.methods.set_up_options('Yes').send({
                from :accounts[0],
                gas:'3000000'
            });
            await vote.methods.set_up_options('No').send({
                from :accounts[0],
                gas:'3000000'
            });
        await vote.methods.set_up_all('can I sleep now ?',1,2,3,4,'human').send({
            from :accounts[0],
            gas:'3000000'
        });
        let r3 =await registry3.methods.return_array(accounts[4]).call();
        //console.log(r3[0]);
        //console.log(registry3.options.address);
        await vote.methods.set_can_register().send({
            from:accounts[0],
            gas:'3000000'
        });
        await vote.methods.register(r3[0],registry1.options.address).send({
            from:accounts[1],
            gas:'3000000'
        });
        await vote.methods.set_can_vote().send({
            from:accounts[0],
            gas:'3000000'
        });
        await vote.methods.can_vote(0).send({
            from:accounts[1],
            gas:'3000000'
        });
        await vote.methods.set_can_tally().send({
            from:accounts[0],
            gas:'3000000'
        });
        
        //let result = await vote.methods.return_ballot().call();
        //console.log(result);
        await vote.methods.compute().send({
            from:accounts[0],
            //value:web3.utils.toWei('10','ether'),
            gas:'3000000'
        });
        let q = await vote.methods.return_question().call();
        let winner = await vote.methods.return_winner().call();
        console.log(q);
        console.log("winner is : ",winner);
        }
        catch(err){
            console.log(err);
        }
        //let winner = await vote.methods.return_winner().call();
        //let result = await vote.methods.return_result().call();
        //console.log(result);
        //assert(winner,'Yes');
    });
    
});