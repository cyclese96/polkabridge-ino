import Web3 from "web3";
import constants from "./constants";
import inoAbi from "./inoABI.json";

let ethContractAddress = "0x6AE737c28661D9A37ffC78Ac3e926F97b2e5d876";
let rinkebyContractAddress = "0x14c3f86a10DDBc9Df9914dACfaEad9f859914B62";
let bscmainContractAddress = "0x53Ddd24e30Ab61c4b9454EA169097Bd95602789b";
let bsctestContractAddress = "0xB00f8f951dc0c66f5B2a0c4b2343F1dc7C896732";

var web3 = new Web3(window.ethereum);
var inoContract = new web3.eth.Contract(
  inoAbi,
  constants.net === 1 ? bsctestContractAddress : bscmainContractAddress
);

export default inoContract;
