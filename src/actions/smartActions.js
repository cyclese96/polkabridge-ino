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

//READ getUserPurchasedPackages
//RETURNS []
export const getUserPurchasedPackages = async () => {
  let userAddress = await getUserAddress();
  return await inoContract.methods
    .getPurchasedPackageIds(userAddress)
    .call((err, response) => {
      return response;
    });
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
