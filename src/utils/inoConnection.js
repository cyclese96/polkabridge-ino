import Web3 from "web3";
import constants from "./constants";
import inoAbi from "./inoABI.json";

let ethContractAddress = "0x6AE737c28661D9A37ffC78Ac3e926F97b2e5d876";
let rinkebyContractAddress = "0x14c3f86a10DDBc9Df9914dACfaEad9f859914B62";
let bscmainContractAddress = "0xA86AB20FA75CF824E27651092ba43fE35FBBF6cb";
let bsctestContractAddress = "0xAD2e444f72F04694370458D268A3E8B470B5cF7D";

var web3 = new Web3(window.ethereum);
var inoContract = new web3.eth.Contract(
  inoAbi,
  constants.net === 1 ? bsctestContractAddress : bscmainContractAddress
);

export default inoContract;
