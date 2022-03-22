const path = require("path");
require('dotenv').config({ path: './.env' });
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const web3 = new Web3();
const MetaMaskAccountIndex = 25;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 7545,
      host: "127.0.0.1",
      network_id: 5777
    },
    ganache_local: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545",
          0)
      },
      network_id: 5777
    },
    ropsten_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/1a735e3423e2475798a8e49509c02a1a", MetaMaskAccountIndex)
      },
      network_id: 3,
      gasPrice: web3.utils.toWei('40', 'gwei'),
      gas: 3000000,
      timeoutBlocks: 500
    },
    goerli_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://goerli.infura.io/v3/1a735e3423e2475798a8e49509c02a1a", MetaMaskAccountIndex)
      },
      network_id: 5,
      gasPrice: web3.utils.toWei('30', 'gwei'),
      gas: 3000000,
      timeoutBlocks: 250,
      networkCheckTimeout: 9999999
    },
    rinkeby_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/1a735e3423e2475798a8e49509c02a1a", MetaMaskAccountIndex)
      },
      network_id: 4,
      gasPrice: web3.utils.toWei('20', 'gwei'),
      gas: 6000000,
      timeoutBlocks: 250,
      networkCheckTimeout: 999999
    },
    kovan_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://kovan.infura.io/v3/1a735e3423e2475798a8e49509c02a1a", MetaMaskAccountIndex)
      },
      network_id: 42,
      gasPrice: web3.utils.toWei('10', 'gwei'),
      gas: 3000000,
      timeoutBlocks: 250,
      networkCheckTimeout: 999999
    },
    main_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://mainnet.infura.io/v3/1a735e3423e2475798a8e49509c02a1a", MetaMaskAccountIndex)
      },
      network_id: 1,
      gasPrice: web3.utils.toWei('25', 'gwei'),
      gas: 6000000,
      timeoutBlocks: 2500,
      networkCheckTimeout: 9999999
    },
    matictest: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://polygon-mumbai.infura.io/v3/1a735e3423e2475798a8e49509c02a1a", MetaMaskAccountIndex),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 20000,
      skipDryRun: true
    },
    maticmain: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://polygon-mainnet.infura.io/v3/1a735e3423e2475798a8e49509c02a1a", MetaMaskAccountIndex),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 20000,
      skipDryRun: true
    }

  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        // evmVersion: 'byzantium', // Default: "petersburg"
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.API_KEY
  }
};
