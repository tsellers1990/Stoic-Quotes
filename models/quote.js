const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  quote: { type: String, required: true },
  person: { type: String, default: "unknown" }
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
