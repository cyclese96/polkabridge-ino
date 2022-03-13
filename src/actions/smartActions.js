import inoContract from "../utils/inoConnection";
import { getUserAddress } from "./web3Actions";

//READ poolInfo
//RETURNS Obj
export const getPoolDetails = async (poolId) => {
  return await inoContract.methods.getPoolInfo(poolId).call((err, response) => {
    return response;
  });
};

//READ packageInfo
//RETURNS Obj
export const getPackageDetails = async (packageId) => {
  return await inoContract.methods
    .getPackageInfo(packageId)
    .call((err, response) => {
      return response;
    });
};

//READ remainINOToken
//RETURNS Obj
export const getRemainINOToken = async (packageId = 1) => {
  return await inoContract.methods
    .getRemainINOToken(packageId)
    .call((err, response) => {
      return response;
    });
};

//READ getPoolList
//RETURNS Obj
export const getPoolList = async (packageId = 1) => {
  return await inoContract.methods.poollist(1, 1).call((err, response) => {
    return response;
  });
};

//READ userPurchaseDetails of a package
//RETURNS Obj
export const userPurchaseDetails = async (packageId) => {
  let userAddress = await getUserAddress();
  return await inoContract.methods
    .whitelist(packageId, userAddress)
    .call((err, response) => {
      return response;
    });
};

//READ userPurchasedQtyByPackageId of a package
//RETURNS Obj
export const userPurchasedQtyByPackageId = async (packageId) => {
  let userAddress = await getUserAddress();
  return await inoContract.methods
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
  let quantity = 0;
  let poolDetail = await getPoolDetails(poolId);

  for (let i = 0; i < poolDetail.PackageIds.length; i++) {
    let remainingTokens = await inoContract.methods
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
export const getIsWhitelisted = async (packageId) => {
  let userAddress = await getUserAddress();
  return await inoContract.methods
    .IsWhitelist(userAddress, packageId)
    .call((err, response) => {
      return response;
    });
};

//READ getTotalPoolLength
//RETURNS number
export const getPoolLength = async () => {
  let totalPools = await inoContract.methods
    .poolLength()
    .call((err, response) => {
      return response;
    });

  return totalPools;
};

//READ getUserPurchasedPackages
//RETURNS []
export const getUserPurchasedPackages = async () => {
  let userAddress = await getUserAddress();
  let totalPools = await getPoolLength();

  let answer = [];
  for (let i = 1; i <= totalPools; i++) {
    let result = await inoContract.methods
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
  return await inoContract.methods.uri(1).call((err, response) => {
    return response;
  });

  let string =
    "https://gateway.pinata.cloud/ipfs/QmcjVgyN1z1e45L6uYvyU4yns3LU2jVzqtgtAvLDTVLiVM/0000000000000000000000000000000000000000000000000000000000000001.json";
};
