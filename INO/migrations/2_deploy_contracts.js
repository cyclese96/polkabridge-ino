const PolkaBridgeINO = artifacts.require("PolkaBridgeINO");
const PolkaBridgeNFT = artifacts.require("PolkaBridgeNFT");
// const PolkaBridgeNFT = "0x3407241B3dB8CD088DA5A8b2063372aB8AA2879e";
const owner = "0x57866ed63ca5f9744cef9aa270bd1f1dce935831";
//let WETH = "0xc778417E063141139Fce010982780140Aa0cD5Ab";//test rinkeby
let WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";//main 
// let WBNB = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";//test bsc

// const URI = "https://gateway.pinata.cloud/ipfs/QmRpYmKuaNnTXXHBaUXodKu4iMKHUUuFHa8c89Df2yX2mF/{id}.json";


const URI = "https://gateway.ipfs.io/ipfs/QmTReaXPY3zcUvzartjpMSdzTsQ6sRFvpKMooDQ6VMEdYz/{id}.json";

module.exports = async function (deployer) {
    await deployer.deploy(PolkaBridgeNFT, URI);
    console.log("PolkaBridgeNFT deployed at " + PolkaBridgeNFT.address)
    await deployer.deploy(PolkaBridgeINO, PolkaBridgeNFT.address, owner, WETH);//, URI);
    console.log("PolkaBridgeINO deployed at " + PolkaBridgeINO.address)
};
