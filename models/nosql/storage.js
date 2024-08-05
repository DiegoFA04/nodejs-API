const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    filename: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
        versionKey: false,
    });

module.exports = mongoose.model('storages', StorageSchema);