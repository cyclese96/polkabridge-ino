var mongoose = require("mongoose");
const { string } = require("prop-types");

var NFTModel = new mongoose.Schema({
  pool_id: {
    type: String,
    required: true,
  },
  project: {
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
const NFT = mongoose.model("NFT", NFTModel, "NFT");

module.exports = NFT;
