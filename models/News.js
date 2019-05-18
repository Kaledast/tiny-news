const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    get: value => value.toUpperCase()
  },
  content: {
    type: String
  }
});

module.exports = mongoose.model("News", newsSchema);
