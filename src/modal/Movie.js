const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')
const slug = require('mongoose-slug-generator')


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
        
mongoose.plugin(slug)
Movies.plugin(mongooseDelete, {
        overrideMethods: 'all', 
        deletedAt : true , 
    })

module.exports = mongoose.model('Movies',Movies)
