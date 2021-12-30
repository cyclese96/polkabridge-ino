import inoContract from "../utils/inoConnection";

//READ poolInfo
//RETURNS Obj
export const getPoolDetails = async (poolId = 1) => {
  return await inoContract.methods.getPoolInfo(poolId).call((err, response) => {
    console.log(response);
    return response;
  });
};

//READ packageInfo
//RETURNS Obj
export const getPackageDetails = async (packageId = 1) => {
  return await inoContract.methods
    .getPackageInfo(packageId)
    .call((err, response) => {
      console.log(response);
      return response;
    });
};

//READ remainINOToken
//RETURNS Obj
export const getRemainINOToken = async (packageId = 1) => {
  return await inoContract.methods
    .getRemainINOToken(packageId)
    .call((err, response) => {
      console.log(response);
      return response;
    });
};

//READ getPoolList
//RETURNS Obj
export const getPoolList = async (packageId = 1) => {
  return await inoContract.methods.poollist(1, 1).call((err, response) => {
    console.log(response);
    return response;
  });
};

//READ getURIStringOfPackage
//RETURNS Obj
export const getURIStringOfPackage = async (packageId = 1) => {
  return await inoContract.methods.uri(1).call((err, response) => {
    console.log(response);
    return response;
  });

  let string =
    "https://gateway.pinata.cloud/ipfs/QmcjVgyN1z1e45L6uYvyU4yns3LU2jVzqtgtAvLDTVLiVM/0000000000000000000000000000000000000000000000000000000000000001.json";
};
