import { inoContract } from "../utils/connections";
import web3 from "web3";

//Check correct network
//Returns boolean true or false
export const checkCurrentChainId = async () => {
  let chainID;
  if (window.ethereum) {
    const id = await window.ethereum.networkVersion;
    return id;
  }
  // if (window.ethereum) {
  //   const id = await window.ethereum.networkVersion;
  //   if (id) {
  //     chainID = id;
  //   } else {
  //     chainID = await web3.eth.getChainId();
  //   }
  // } else {
  //   chainID = await web3.eth.getChainId();
  // }
  // console.log(chainID);
  // return chainID;
};

//READ poolInfo
//RETURNS Obj
export const getPoolDetails = async (poolId) => {
  let contractInstance = await inoContract();

  return await contractInstance.methods
    .getPoolInfo(poolId)
    .call((err, response) => {
      return response;
    });
};

//READ packageInfo
//RETURNS Obj
export const getPackageDetails = async (packageId) => {
  let contractInstance = await inoContract();
  return await contractInstance.methods
    .getPackageInfo(packageId)
    .call((err, response) => {
      return response;
    });
};

//READ remainINOToken
//RETURNS Obj
export const getRemainINOToken = async (packageId = 1) => {
  let contractInstance = await inoContract();
  return await contractInstance.methods
    .getRemainINOToken(packageId)
    .call((err, response) => {
      return response;
    });
};

//READ getPoolList
//RETURNS Obj
export const getPoolList = async (packageId = 1) => {
  let contractInstance = await inoContract();

  return await contractInstance.methods.poollist(1, 1).call((err, response) => {
    return response;
  });
};

//READ userPurchaseDetails of a package
//RETURNS Obj
export const userPurchaseDetails = async (packageId, account) => {
  let contractInstance = await inoContract();

  let userAddress = account;
  return await contractInstance.methods
    .whitelist(packageId, userAddress)
    .call((err, response) => {
      return response;
    });
};

//READ userPurchasedQtyByPackageId of a package
//RETURNS Obj
export const userPurchasedQtyByPackageId = async (packageId, userAddress) => {
  let contractInstance = await inoContract();

  return await contractInstance.methods
    .getPurchasedPackageIds(userAddress, packageId)
    .call((err, response) => {
      return response;
    });
};

//READ getRemainingQuantityOfPool of a pool
//RETURNS Obj
export const getRemainingQuantityOfPool = async (poolId) => {
  let quantity = 0;
  let poolDetail = await getPoolDetails(poolId);

  for (let i = 0; i < poolDetail.PackageIds.length; i++) {
    let remainingTokens = await getRemainINOToken(poolDetail.PackageIds[i]);
    quantity = quantity + parseInt(remainingTokens);
  }
  return quantity;
};

//READ getInitialBalanceOfPool of a pool
//RETURNS Obj
export const getInitialBalanceOfPool = async (poolId) => {
  let contractInstance = await inoContract();
  let quantity = 0;
  let poolDetail = await getPoolDetails(poolId);

  for (let i = 0; i < poolDetail.PackageIds.length; i++) {
    let remainingTokens = await contractInstance.methods
      .getBalanceItemByPackageId(poolDetail.PackageIds[i])
      .call((err, response) => {
        return response;
      });

    quantity = quantity + parseInt(remainingTokens);
  }
  return quantity;
};

//READ getIsWhitelisted
//RETURNS Obj
export const getIsWhitelisted = async (packageId, account) => {
  let contractInstance = await inoContract();
  let userAddress = account;
  return await contractInstance.methods
    .IsWhitelist(userAddress, packageId)
    .call((err, response) => {
      return response;
    });
};

//READ getTotalPoolLength
//RETURNS number
export const getPoolLength = async () => {
  let contractInstance = await inoContract();

  let totalPools = await contractInstance.methods
    .poolLength()
    .call((err, response) => {
      return response;
    });

  return totalPools;
};

//READ getUserPurchasedPackages
//RETURNS []
export const getUserPurchasedPackages = async (account) => {
  let userAddress = account;
  let totalPools = await getPoolLength();
  let contractInstance = await inoContract();

  let answer = [];
  for (let i = 1; i <= totalPools; i++) {
    let result = await contractInstance.methods
      .getPurchasedPackageIds(userAddress, i)
      .call(async (err, response) => {
        return response;
      });
    answer = [...answer, ...result];
  }

  return answer;
};

//READ getURIStringOfPackage
//RETURNS Obj
export const getURIStringOfPackage = async (packageId = 1) => {
  let contractInstance = await inoContract();

  return await contractInstance.methods.uri(1).call((err, response) => {
    return response;
  });

  let string =
    "https://gateway.pinata.cloud/ipfs/QmcjVgyN1z1e45L6uYvyU4yns3LU2jVzqtgtAvLDTVLiVM/0000000000000000000000000000000000000000000000000000000000000001.json";
};
