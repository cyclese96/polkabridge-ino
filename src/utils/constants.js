// 0 mainnet, 1 testnet
let network_type = 1;

let constants;
constants = {
  net: network_type,
  ankr_rpc_eth: "https://rpc.ankr.com/eth",
  ankr_rpc_rinkeby: "https://rinkeby.arbitrum.io/rpc",
};

export default constants;
