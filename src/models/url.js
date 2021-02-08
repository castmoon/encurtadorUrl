const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
  link: {type: String, required: true},
  urlCode: {type: String, required: true},
  encurtedUrl: {type: String, required: true}
})

module.exports = mongoose.model('Link', linkSchema);