import Web3 from 'web3';

//const web3 = new Web3(window.ethereum);
//window是跟瀏覽器相關的，但是跟next.js不在同一個地方，所以不能access nect.js的server
//因為這個檔案會被跑兩遍，一次給server一次給browser
//window.ethereum.enable();
let web3;
if(typeof window !== 'undefined' &&  typeof window.web3 !== 'undefined'){//inside的browser,metamask is available
    // we are in the browser
    web3 = new Web3(window.ethereum);
    window.ethereum.enable();
}else{
    // we are on the server *or* ther user is not running the metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/70c54a37736c4698951498533c361e3c'
    );
    web3 = new Web3();
    web3.setProvider(provider);
}

export default web3;
///這樣就會有新的web3 version

