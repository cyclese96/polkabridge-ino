import constants from "./constants";
import inoAbi from "./inoABI.json";
import Web3 from "web3";
import { checkCurrentChainId } from "./../actions/smartActions";

let ethContractAddress = "0x6AE737c28661D9A37ffC78Ac3e926F97b2e5d876";
let rinkebyContractAddress = "0x14c3f86a10DDBc9Df9914dACfaEad9f859914B62";
let bscmainContractAddress = "0x6AE737c28661D9A37ffC78Ac3e926F97b2e5d876";
let bsctestContractAddress = "0x6844ab5644f4b061179cdb99964b7f8d23b0514d";

export const isMetaMaskInstalled = () => {
  return typeof window.web3 !== "undefined";
};

export const inoContract = async () => {
  const abi = inoAbi;
  let chainId = await checkCurrentChainId();
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

  const connection = await getCurrentConnection(abi, contractAddress);

  // let res = await connection.methods.getPoolInfo(1).call((err, response) => {
  //   return response;
  // });
  // console.log(res);

  return connection;
};

export const getCurrentConnection = async (abi, contractAddress) => {
  let chainId = await checkCurrentChainId();
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
    ? new Web3(window.ethereum)
    : new Web3(new Web3.providers.HttpProvider(currentRPC));
  let temp = new web3.eth.Contract(abi, contractAddress);

  // let res = await temp.methods.getPoolInfo(1).call((err, response) => {
  //   return response;
  // });
  // console.log(res);

  return temp;
};
