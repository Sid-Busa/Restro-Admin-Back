const route = require('express').Router()
const addonsCategoryController = require('../controller/addonscategory.js')

route.get('/getAddonsCategory', addonsCategoryController.getAddonsCategory_get)
route.post('/addAddonsCategory', addonsCategoryController.addAddonsCategory_post)
route.put('/updateAddonsCategory', addonsCategoryController.updateAddonsCategory_put)
route.delete('/deleteAddonsCategory/:id', addonsCategoryController.deletAddonsCategory_delete)

module.exports = route