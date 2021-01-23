const mongoose = require('mongoose')
const addonsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addonCategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Addoncategory',
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Addons', addonsSchema)