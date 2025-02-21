const Restaurant = require('../models/restaurants')

exports.singinRestaurant_post = ((req, res) => {
    Restaurant.findOne({ username: req.body.username })
        .then(result => {
            console.log(result)
            if (result.password == req.body.password) {
                res.json({ success: true, data: result })
            } else {
                res.json({ success: false, message: 'Wrong Password' })
            }
        })
        .catch(error => {
            res.json({ success: false, message: 'Wrong Username' })
        })
})

exports.singupRestaurant_post = ((req, res) => {
    
    const newRestaurant = new Restaurant({
        username: req.body.username,
        password: req.body.password,
        restaurantName: req.body.name
    })

    newRestaurant.save()
        .then(result => {
            res.json({ success: true, data: result })
        })
        .catch(error => {
            console.log(error)
            res.json({ success: false, message: 'Restaurant Addition Failed' })
        })
})