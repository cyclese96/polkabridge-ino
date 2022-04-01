import constants from "./constants";
import inoAbi from "./inoABI.json";
import Web3 from "web3";

let currentNetwork = constants.net; // 1 means testnet, 0 means mainnet

export const isMetaMaskInstalled = () => {
  return typeof window.web3 !== "undefined";
};

export const inoContract = () => {
  const abi = inoAbi;
  const contractAddress =
    currentNetwork === 0
      ? "0x6AE737c28661D9A37ffC78Ac3e926F97b2e5d876"
      : "0x14c3f86a10DDBc9Df9914dACfaEad9f859914B62";
  const connection = getCurrentConnection(abi, contractAddress);
  return connection;
};

export const getCurrentConnection = (abi, contractAddress) => {
  let currentNetwork = constants.net;
  const currentRPC =
    currentNetwork === 0 ? constants.ankr_rpc_eth : constants.ankr_rpc_rinkeby;

  const web3 = isMetaMaskInstalled()
    ? new Web3(window.ethereum)
    : new Web3(new Web3.providers.HttpProvider(currentRPC));
  return new web3.eth.Contract(abi, contractAddress);
};
