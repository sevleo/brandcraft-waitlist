const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailDataSchema = new Schema(
  {
    email: { type: String },
    creationDate: { type: Date },
  },
  { collection: "emailData" }
);

module.exports = mongoose.model("EmailData", emailDataSchema);
