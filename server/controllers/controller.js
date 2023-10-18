const Item = require("../models/resto.model")





//!-------CRUD

// READ ALL
module.exports.findALLItems = (req, res) => {
    Item.find()
        .then(allItems => {
            res.json({ allItems })
        })
        .catch(err => res.json({ message: "There is an ERROR", error: err }))
}

// CREATE

module.exports.newItem = (req, res) => {
    Item.create(req.body)
        .then(newItem => {
            res.json({ newItem })
        })
        .catch(err => res.json({ message: "wait a minute 😏😏", error: err }))
}


// Find One

module.exports.findOneItem = (req, res) => {
    Item.findOne({ _id: req.params.id })
        .then(oneItem => res.status(200).json({
            oneItem
        })
        ).catch(err => { res.status(400).json({ message: "wait a minute 😏😏", error: err }) })
}

// Update
module.exports.updateOneItem = (req, res) => {
    Item.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedItem => { res.json({ updatedItem }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deleteItem = (req, res) => {
    Item.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}