import constants from "./constants";
import inoAbi from "./inoABI.json";
import Web3 from "web3";
import { checkCurrentChainId } from "./../actions/smartActions";

let ethContractAddress = "0x6AE737c28661D9A37ffC78Ac3e926F97b2e5d876";
let rinkebyContractAddress = "0x14c3f86a10DDBc9Df9914dACfaEad9f859914B62";
let bscmainContractAddress = "0xA86AB20FA75CF824E27651092ba43fE35FBBF6cb";
let bsctestContractAddress = "0xAD2e444f72F04694370458D268A3E8B470B5cF7D";

export const isMetaMaskInstalled = () => {
  return typeof window.web3 !== "undefined";
};

export const inoContract = async (chainIds) => {
  const abi = inoAbi;
  let chainId;
  if (chainIds) {
    chainId = constants.net === 0 ? chainIds[0] : chainIds[1];
  } else {
    chainId = 1;
  }

  let contractAddress;

  switch (parseInt(chainId)) {
    case 1:
      contractAddress = ethContractAddress;
      break;
    case 4:
      contractAddress = rinkebyContractAddress;

      break;
    case 56:
      contractAddress = bscmainContractAddress;

      break;
    case 97:
      contractAddress = bsctestContractAddress;
      break;
    default:
      contractAddress = ethContractAddress;
  }

  const connection = await getCurrentConnection(abi, contractAddress, chainId);

  // let res = await connection.methods.getPoolInfo(1).call((err, response) => {
  //   return response;
  // });
  // console.log(res);

  return connection;
};

export const getCurrentConnection = async (abi, contractAddress, chainId) => {
  let currentRPC;

  switch (parseInt(chainId)) {
    case 1:
      currentRPC = constants.ankr_rpc_eth;
      break;
    case 4:
      currentRPC = constants.ankr_rpc_rinkeby;

      break;
    case 56:
      currentRPC = constants.ankr_rpc_bsc;

      break;
    case 97:
      currentRPC = constants.ankr_rpc_bsctest;
      break;
    default:
      currentRPC = constants.ankr_rpc_eth;
  }

  const web3 = isMetaMaskInstalled()
    ? new Web3(new Web3.providers.HttpProvider(currentRPC))
    : new Web3(new Web3.providers.HttpProvider(currentRPC));
  let temp = new web3.eth.Contract(abi, contractAddress);

  // let res = await temp.methods.getPoolInfo(1).call((err, response) => {
  //   return response;
  // });
  // console.log(res);

  return temp;
};
