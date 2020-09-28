const {
    Schema,
    model,
    Types
} = require('mongoose');

const schema = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    stickers: [{
        type: Types.ObjectId,
        ref: 'Sticker'
    }]
})

module.exports = model('User', schema);