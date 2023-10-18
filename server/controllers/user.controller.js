const User = require("../models/user.model")


// READ ALL
module.exports.User = (req, res) => {
    User.find()
        .then(allUsers => {
            res.json({ allUsers} )
        })
        .catch(err => res.json({ message: "There is an ERROR", error: err }))
}

// CREATE

module.exports.newUser = (req, res) => {
    User.create(req.body)
        .then(newUser => {
            res.json({ newUser })
        })
        .catch(err => res.json({ message: "wait a minute 😏😏", error: err }))
}


// Find One

module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneUser => res.status(200).json({
            oneUser
        })
        ).catch(err => { res.status(400).json({ message: "wait a minute 😏😏", error: err }) })
}

// Update
module.exports.updateOneUser = (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => { res.json({ updatedUser }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}

module.exports.register = (req, res) => {
    User.create(req.body)
    .then(user => {
        res.json({ msg: "success!", user: user });
    })
    .catch(err => res.json(err));
}