

const mongoose = require("mongoose");

const idSchema = new mongoose.Schema({
    number:{
        type:String,
        required: [true, "student email must be included"]
    },
    password:{
        type:String,
        required: [true, "student password must be included"]
    }
})

exports.Id = mongoose.model("idHack", idSchema);