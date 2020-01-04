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

exports.genre_detaile = (req,res) =>{
    res.send('NOT IMPLEMENTED:genre detail' + req.params.id)
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