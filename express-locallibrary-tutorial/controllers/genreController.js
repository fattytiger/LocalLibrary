const async = require('async')
const book  = require('../models/book')
const genre = require('../models/genre')

exports.genre_list = (req,res,next) => {
    genre.find()
    .exec((err,list_genre) => {
        if(err){return next(err)}
        res.render('genre-list',{title:'Genre List',genre_list:list_genre})
    })
}

exports.genre_detaile = (req,res,next) =>{
    async.parallel({
        genre:function(callback) {
            genre.findById(req.params.id)
                .exec(callback)
        },
        genre_books:function(callback){
            book.find({'genre':req.params.id})
                .exec(callback)
        }
    },function(err,result) {
        if(err) {return next(err)}
        if(result.genre === null){
            let err = new Error('Genre not found')
            err.status = 404
            return next(err)
        }

        //successful
        res.render('genre-detail',{title:'Genre Detail',genre:result.genre,genre_books:result.genre_books})
    })
}

exports.genre_create_get = (req,res) => {
    res.send('NOT IMPLEMENTED:genre create GET')
}

exports.genre_create_post = (req,res) => {
    res.send('NOT IMPLEMENTED:genre create POST')
}

exports.genre_delete_get = (req,res) => {
    res.send('NOT IMPLEMENTED:genre delete GET')
}

exports.genre_delete_post = (req,res) => {
    res.send('NOT IMPLEMENTED:genre delete POST')
}

exports.genre_update_get = (req,res) => {
    res.send('NOT IMPLEMENTED:genre update GET')
}

exports.genre_update_post = (req,res) => {
    res.send('NOT IMPLEMENTED:genre update POST')
}