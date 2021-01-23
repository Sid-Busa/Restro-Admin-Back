const AddonsCategory = require('../models/addonscategory')

exports.getAddonsCategory_get = ((req, res) => {
    AddonsCategory.find()
    .then(result => {
        res.json({success: true, data: result})
    })
    .catch(error => {
        console.log(error)
        res.json({success: false, message: 'Get Addons Category Failed'})
    })
})

exports.addAddonsCategory_post = ((req, res) => {
    const newAddonsCategory = new AddonsCategory ({
        name: req.body.name
    })

    newAddonsCategory.save()
    .then(result => {
        res.json({success: true, message: 'Addons Category Added Successfully'})
    })
    .catch(error => {
        console.log(error)
        res.json({success: false, message: 'Add Addons Category Failed'})
    })
})  

exports.updateAddonsCategory_put = ((req, res) => {
    const updateAddonCategory = {
        name: req.body.name
    }
    AddonsCategory.findByIdAndUpdate({_id: req.body.id}, updateAddonCategory)
    .then(result => {
        res.json({success: true, data: result})
    })
    .catch(error => {
        console.log(error)
        res.json({success: false, message: 'Update Addons Category Failed'})
    })
})

exports.deletAddonsCategory_delete = ((req, res) => {
    AddonsCategory.findByIdAndDelete({_id: req.body.id})
    .then(result => {
        res.json({success: true, message: 'Addons Category Deleted Successfully'})
    })
    .catch(error => {
        res.json({success: false, message: 'Addons Category Deletion Failed'})
    })
})