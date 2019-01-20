const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const UserSchema = mongoose.schema({
    name:{
        type: String
    },
    email:{
        type: String
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = funtion(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByname = funtion(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
}


module.export.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throe err;
            newUser.password = hash;
            newUser.save(callback)
        });
    });
}
