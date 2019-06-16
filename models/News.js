const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String,
    default: 'No Content yet'
  }
});

module.exports = mongoose.model('News', newsSchema);
