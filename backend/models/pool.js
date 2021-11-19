var mongoose = require("mongoose");
const { string } = require("prop-types");

var PoolModel = new mongoose.Schema({
  pool_id: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  team: {
    type: String,
    required: true,
  },

  start_date: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  network: {
    type: String,
    required: true,
  },

  createdDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
});
const Pool = mongoose.model("Pool", PoolModel, "Pool");

module.exports = Pool;
