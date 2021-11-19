var express = require("express");
var router = express.Router();
var PoolDao = require("../dao/pool");

// Public
// GET Single pool based on ID
router.get("/pool/:id", async (req, res, next) => {
  const poolId = req.params.id;
  try {
    const data = await PoolDao.getPoolById(poolId);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send("error");
  }
});

// Public
// GET All pools 
router.get("/pool", async (req, res, next) => {
  const poolId = req.params.id;
  try {
    const data = await PoolDao.getAllPools();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send("error");
  }
});
// POST create new pool based on details
router.post("/pool", async (req, res, next) => {
  var poolData = {
    pool_id: 1,
    description:
      "Collection of 5 High quality AI generated VR Gaming NFT offered by AwardVr Artists and developers.",
    price: 13,
    currency: "MATIC",
    network: "Polygon",
    quantity: 5,
    start_date: new Date(),
    project: "AvatarPool Rare",
    team: "AvatarPool",
  },
  try {
    const data = await PoolDao.createPool(poolData);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// DELET a pool based on Id
router.delete("/pool", async (req, res, next) => {
  try {
    const data = await PoolDao.deletePool();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send("error");
  }
});

module.exports = router;
