const mongoose = require('mongoose');

const ShopperSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const ShopperModel = mongoose.model("shoppers", ShopperSchema);
module.exports = ShopperModel;
