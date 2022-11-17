const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tradeSchema = new Schema(
  {
    pair: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    closedPrice: {
      type: Number,
      required: true,
    },
    openedDate: {
      type: Date,
      required: true,
    },
    closedDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trade", tradeSchema);