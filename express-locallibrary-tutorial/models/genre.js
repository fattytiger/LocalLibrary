const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const GenreSchema = new Schema(
    {
        name:{type:String,required:true}
    }
)

GenreSchema.virtual('url')
.get(function(){
    return `/catalog/genre/${this._id}`
})

GenreSchema.virtual('genre_name')
.get(function(){
    return this.name
})

module.exports = mongoose.model('Genre',GenreSchema)