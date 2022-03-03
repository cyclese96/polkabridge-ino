const PolkaBridgeINO = artifacts.require("PolkaBridgeINO");
const owner = "0xfEEF5F353aE5022d0cfcD072165cDA284B65772B";
let WETH = "0xc778417E063141139Fce010982780140Aa0cD5Ab";//test
const URI = "https://gateway.pinata.cloud/ipfs/QmTgFELoGFsT29AVqkZq9uxmzueTJfLkZ3wUqRyLJgqn1R/{id}.json";

module.exports = async function(deployer) {
    await deployer.deploy(PolkaBridgeINO, owner, WETH, 'PolkaBridge: INO', 'PBRI', URI);
};
