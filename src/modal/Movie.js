const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movies = new Schema({
    name : {type : String, max: 40},
    description : {type: String,max: 500},
    image : {type : String,max : 800},
    createAt : {type : Date,dafault : Date.now},
    updateAt : {type : Date,dafault : Date.now}
})

module.exports = mongoose.model('Movies',Movies)
