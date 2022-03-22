import Web3 from "web3";
import constants from "./utils/constants";
import provider from "./provider";
import getInfuraKey from "./actions/helper";

var web3;

let infuraKey = getInfuraKey();
console.log(infuraKey);
if (typeof window.web3 !== "undefined") {
  // Use Mist/MetaMask's provider.

  web3 = new Web3(window.web3.currentProvider);
} else {
  if (provider.connected) {
    web3 = new Web3(provider);
  } else {
    console.log("im here 3");

    console.log("using infura provider");
    // const infura =
    //   constants.net === "testnet"
    //     ? `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
    //     : `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;

    const infura =
      constants.net === 0
        ? `https://rpc.ankr.com/eth`
        : `https://rinkeby.infura.io/v3/${infuraKey}`;

    web3 = new Web3(new Web3.providers.HttpProvider(infura));
  }
}
export default web3;
