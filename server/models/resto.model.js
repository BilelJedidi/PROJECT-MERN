const mongoose = require("mongoose")



const MenuSchema = new mongoose.Schema({

    ItemName: {
        type: String
    },
    ChineseName:{
        type: String
    },
    details:[
        {
            price: {
                type: Number
            },
            ingredients: {
                type: Array
            }
        }
    ]
}, { timestamps: true });


module.exports = mongoose.model("Menu", MenuSchema)