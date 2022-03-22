import Web3 from "web3";
import constants from "./constants";

let inoConstant;
if (constants.net === 0) {
  inoConstant = {
    rpcUrl: "https://rpc.ankr.com/eth",
    chainId: 1, // ETH - Mainnet chain id
    contractAddress: "0x18A38553Fe7c8A20FaA45E229151E1e82bEC5961",
    abi: [
      {
        "inputs": [
          {
            "internalType": "contract PolkaBridgeNFT",
            "name": "_polkaBridgeNFT",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_WETH",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "WETH",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "polkaBridgeNFT",
        "outputs": [
          {
            "internalType": "contract PolkaBridgeNFT",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "purchasecheck",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "whitelist",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "Id",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "IsWhitelist",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "WhitelistDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "PurchaseTime",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "IsClaimed",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "TotalETHPurchase",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "PurchasedItemCount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "stateMutability": "payable",
        "type": "receive",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "changeOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "poolLength",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "packageLength",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "addWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "user",
            "type": "address[]"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "addMulWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isWhitelist",
            "type": "bool"
          }
        ],
        "name": "updateWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "IsWhitelist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_PoolId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_MinimumTokenSoldout",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_TotalItemCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_RatePerETH",
            "type": "uint256"
          }
        ],
        "name": "addPackageToPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_Begin",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_End",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_Type",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_AmountPBRRequire",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_LockDuration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_claimType",
            "type": "uint256"
          }
        ],
        "name": "addPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_Begin",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_End",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_Type",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_AmountPBRRequire",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_LockDuration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_claimType",
            "type": "uint256"
          }
        ],
        "name": "updatePool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "stopPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "activePool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_PackageId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_PoolId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_MinimumTokenSoldout",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_TotalItemCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_RatePerETH",
            "type": "uint256"
          }
        ],
        "name": "updatePackage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "packageId",
            "type": "uint256"
          }
        ],
        "name": "getBalanceItemByPackageId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "packageId",
            "type": "uint256"
          }
        ],
        "name": "getRemainINOToken",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "packageId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          }
        ],
        "name": "purchaseINO",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "claimPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC1155Received",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC721Received",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "getPoolInfo",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "Id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "Begin",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "End",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "Type",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "AmountPBRRequire",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "LockDuration",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ActivedDate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "StopDate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "claimType",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "IsActived",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "IsStopped",
                "type": "bool"
              },
              {
                "internalType": "uint256[]",
                "name": "PackageIds",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct PolkaBridgeINO.INOPool",
            "name": "retSt",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "packageId",
            "type": "uint256"
          }
        ],
        "name": "getPackageInfo",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "Id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "PoolId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "TotalSoldCount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "MinimumTokenSoldout",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "TotalItemCount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "RatePerETH",
                "type": "uint256"
              },
              {
                "internalType": "address[]",
                "name": "UsersPurchased",
                "type": "address[]"
              }
            ],
            "internalType": "struct PolkaBridgeINO.Package",
            "name": "retSt",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "getPurchasedPackageIds",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "withdrawPoolFund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdrawETHFund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IERC20",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "withdrawErc20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
  };
} else {
  inoConstant = {
    rpcUrl: "https://data-seed-prebsc-2-s1.binance.org:8545/",
    chainId: 4, // Testnet
    contractAddress: "0x14c3f86a10DDBc9Df9914dACfaEad9f859914B62",
    abi: [
      {
        "inputs": [
          {
            "internalType": "contract PolkaBridgeNFT",
            "name": "_polkaBridgeNFT",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_WETH",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "WETH",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "polkaBridgeNFT",
        "outputs": [
          {
            "internalType": "contract PolkaBridgeNFT",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "purchasecheck",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "whitelist",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "Id",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "IsWhitelist",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "WhitelistDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "PurchaseTime",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "IsClaimed",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "TotalETHPurchase",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "PurchasedItemCount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "stateMutability": "payable",
        "type": "receive",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "changeOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "poolLength",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "packageLength",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "addWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "user",
            "type": "address[]"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "addMulWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isWhitelist",
            "type": "bool"
          }
        ],
        "name": "updateWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "IsWhitelist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_PoolId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_MinimumTokenSoldout",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_TotalItemCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_RatePerETH",
            "type": "uint256"
          }
        ],
        "name": "addPackageToPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_Begin",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_End",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_Type",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_AmountPBRRequire",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_LockDuration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_claimType",
            "type": "uint256"
          }
        ],
        "name": "addPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_Begin",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_End",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_Type",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_AmountPBRRequire",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_LockDuration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_claimType",
            "type": "uint256"
          }
        ],
        "name": "updatePool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "stopPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "activePool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_PackageId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_PoolId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_MinimumTokenSoldout",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_TotalItemCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_RatePerETH",
            "type": "uint256"
          }
        ],
        "name": "updatePackage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "packageId",
            "type": "uint256"
          }
        ],
        "name": "getBalanceItemByPackageId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "packageId",
            "type": "uint256"
          }
        ],
        "name": "getRemainINOToken",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "packageId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          }
        ],
        "name": "purchaseINO",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "claimPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC1155Received",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC721Received",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "getPoolInfo",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "Id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "Begin",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "End",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "Type",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "AmountPBRRequire",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "LockDuration",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "ActivedDate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "StopDate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "claimType",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "IsActived",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "IsStopped",
                "type": "bool"
              },
              {
                "internalType": "uint256[]",
                "name": "PackageIds",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct PolkaBridgeINO.INOPool",
            "name": "retSt",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "packageId",
            "type": "uint256"
          }
        ],
        "name": "getPackageInfo",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "Id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "PoolId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "TotalSoldCount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "MinimumTokenSoldout",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "TotalItemCount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "RatePerETH",
                "type": "uint256"
              },
              {
                "internalType": "address[]",
                "name": "UsersPurchased",
                "type": "address[]"
              }
            ],
            "internalType": "struct PolkaBridgeINO.Package",
            "name": "retSt",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "getPurchasedPackageIds",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "withdrawPoolFund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdrawETHFund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IERC20",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "withdrawErc20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
  };
}

var web3 = new Web3(window.ethereum);
var inoContract = new web3.eth.Contract(
  inoConstant.abi,
  inoConstant.contractAddress
);

export default inoContract;
