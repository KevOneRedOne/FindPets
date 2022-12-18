const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 50
        },
        lastname: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            minlength: 3,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            minlength: 5,
            maxlength: 255
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 1024
        },
        phone: {
            type: String,
            required: false,
            trim: true,
            minlength: 10,
            maxlength: 10
        },
        address: {
            type: String,
            required: false,
            trim: true,
            minlength: 5,
            maxlength: 255
        },
        city: {
            type: String,
            required: false,
            trim: true,
            minlength: 3,
            maxlength: 50
        },
        description: {
            type: String,
            required: false,    
        },
        thumbnail: {
            type: String,
            required: false,
        },
        pets: { 
            type: Number,
            required: false,
        },
        children: {
            type: Number,
            required: false,
        },
        house: {
            type: Boolean,
            required: false,
        },
        appartement: {
            type: Boolean,
            required: false,
        },
        garden: {
            type: Boolean,
            required: false,
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        isBanned: {
            type: Boolean,
            default: false
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    }, 
    { 
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);









