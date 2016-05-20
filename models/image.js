'use strict';

var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    imageurl: {type: String},
    createdTime: {type: String} // will be change to datetime
});

var Image = mongoose.model('Image', imageSchema);
module.exports = Image;
