var PoolModel = require("../models/pool");

const poolDao = {
  async getPoolById(poolId) {
    return await PoolModel.findOne({ pool_id: poolId });
  },

  async getAllPools() {
    let data = await PoolModel.find({});
    return data;
  },
  async createPool(poolData) {
    await PoolModel.insertMany(poolData);
    return await PoolModel.find({ pool_id: poolData.pool_id });
  },

  async deletePool(poolId) {
    return await PoolModel.deleteMany({ pool_id: poolId });
  },
};

module.exports = poolDao;
