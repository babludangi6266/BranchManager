const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema(
  {
    branchName: { type: String, required: true },
    branchLocation: { type: String, required: true },
    branchLogo: { type: String, required: true }, // Store base64 string
  },
  { timestamps: true }
);

module.exports = mongoose.model('Branch', branchSchema);
