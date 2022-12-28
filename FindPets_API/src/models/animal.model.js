const mongoose = require('mongoose');

const Animals = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50
        },
        thumbnail: {
            type: String,
            required: false,
            trim: true,
        },
        images: {
            type: String,
            required: false,
            trim: true,
        },
        species: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            minlength: 3,
            maxlength: 50
        },
        breed: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 50
        },
        age: {
            type: Number,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 3
        },
        dateofbirth: {
            type: Date,
            required: true,
            trim: true,
            minlength: 10,
            maxlength: 10
        },
        description: {
            type: String,
            required: false,
        },
        gender: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
        },
        size: {
            type: String,
            required: false,
            trim: true,
        },
        weight: {
            type: Number,
            required: false,
            trim: true,
            minlength: 1,
            maxlength: 4
        },
        isNeutered: {
            type: Boolean,
            required: true,
        },
        isVaccinated: {
            type: Boolean,
            required: true,
        },
        isMicrochipped: {
            type: Boolean,
            required: true,
        },
        isOKwithPeople: {
            type: Boolean,
            required: true,
        },
        isOKwithKids: {
            type: Boolean,
            required: true,
        },
        isOKwithDogs: {
            type: Boolean,
            required: true,
        },
        isOKwithCats: {
            type: Boolean,
            required: true,
        },
        isOKwithOtherAnimals: {
            type: Boolean,
            required: true,
        },
        isOKwithStangers: {
            type: Boolean,
            required: true,
        },
        isOKStayingAlone: {
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true,
    },
    {
        collection: 'Animals',
    }
);

module.exports = mongoose.model('Animals', Animals, 'Animals');