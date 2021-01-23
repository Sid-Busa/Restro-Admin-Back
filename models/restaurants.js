const mongoose = require('mongoose')
const restaurantSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Reataurant', restaurantSchema)