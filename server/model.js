const mongoose = require("mongoose");
 mongoose.connect("mongodb+srv://kuvarjigupta2004:4pGv9xU2OL1JJgQ8@cluster0.m1iqe.mongodb.net/");

const userschema = mongoose.Schema({
    name:String,
    mobile:Number,
    add:String
})


module.exports = mongoose.model("info", userschema);