var Web3 = require('web3')
var url = 'https://polygon-mainnet.infura.io/v3/bc69f62eebf64d6c845298dd53d72a83'
var web3 = new Web3(url)
var _gasData=0;
function sleep(ms) {
  
    return new Promise(resolve => setTimeout(resolve, ms));
}
function Result(receiveGasData){
    console.log("---------------- Final Gas Price Result ---------------- ");
    let StandardGasPrice = receiveGasData/5;
    console.log("Standard Gas Price is: "+StandardGasPrice+" Gwei");
    let FinalGasPrice = (StandardGasPrice+Number(20.0000000));
    console.log("Final Gas⛽ Price is "+FinalGasPrice+" Gwei");
    console.log("Note: Use Final Gas Price in order to avoid Transaction on pending and Out of Gas scenarios.")
}
async function EstimateGasPrice() {
    for(i=0;i<5;i++){
    console.log('---------------- Current Gas Price ---------------- ');
    web3.eth.getGasPrice().then((result)=>{
        _gasData = _gasData + parseFloat(result);
        console.log(result,"Wei")
    })
    web3.eth.getGasPrice().then((result)=>{console.log(web3.utils.fromWei(result,'ether'),"Ether")})
    web3.eth.getGasPrice().then((result)=>{console.log(web3.utils.fromWei(result,'gwei'),"Gwei")})
    await sleep(5000);
    
    }
    let sendGasData = web3.utils.fromWei(_gasData.toString(),'gwei');
    Result(sendGasData)
}
EstimateGasPrice()