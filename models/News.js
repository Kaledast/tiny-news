const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  //_id: mongoose.Types.ObjectId,
  title: String,
  content: String
});

module.exports = mongoose.model("News", newsSchema);
