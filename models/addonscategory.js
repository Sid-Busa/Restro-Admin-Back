const mongoose = require('mongoose')
const addonsCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('AddonsCategory', addonsCategorySchema)