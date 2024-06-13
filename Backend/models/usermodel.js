const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
    url:String,
    username:String,
    passward:String
});
module.exports = mongoose.model('user',userSchema);