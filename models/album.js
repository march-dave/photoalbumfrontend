'use strict';

var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    albumname: {type: String},
    albumimages: []
});

var Album = mongoose.model('Album', albumSchema);
module.exports = Album;
