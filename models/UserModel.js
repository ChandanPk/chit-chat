const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 4
    },

    profilePic: {
        type: String,
        default: ""
    },

    coverPic: {
        type: String,
        default: ""
    },

    followers: {
        type: Array,
        default: []
    },

    followings: {
        type: Array,
        defalt: []
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
})

const UserModel = new mongoose.model('user', UserSchema);

module.exports = UserModel;