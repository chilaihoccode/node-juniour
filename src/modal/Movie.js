const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Movies = new Schema({
    name : {type : String, max: 40},
    description : {type: String,max: 500},
    image : {type : String,max : 800},
    imageID : {type : String},
    title : {type : String},
    slug : { type : String, slug: 'name', unique: true },
},{
    timestamps : true
})

module.exports = mongoose.model('Movies',Movies)
