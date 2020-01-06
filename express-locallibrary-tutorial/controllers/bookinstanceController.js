const async = require('async')
const book  = require('../models/book')
const bookInstance = require('../models/bookinstance')

exports.bookinstance_list = (req,res,next) => {
    bookInstance.find()
        .populate('book')
        .exec((err,list_bookinstances) => {
            if(err){return next(err)}
            res.render('bookinstance-list',{title:'Book Instance List',bookinstance_list:list_bookinstances})
        })
}

exports.bookinstance_detail = (req,res,next) => {
    bookInstance.findById(req.params.id)
    .populate('book')
    .exec((err,bookinstance) => {
        if(err){return next(err)}
        if(bookinstance == null){
            let err = new Error('Book copy not found')
            err.status = 404
            return next(err)
        }
        res.render('bookinstance-detail',{title:`Copy:${bookinstance.book.title}`, bookinstance:bookinstance})
    })
}

exports.bookinstance_create_get = (req,res) =>{
    res.send('NOT IMPLEMENTED:bookinstance create GET')
}

exports.bookinstance_create_post = (req,res) => {
    res.send('NOT IMPLEMENTED:bookinstance create POST')
}

exports.bookinstance_delete_get = (req,res) => {
    res.send('NOT IMPLEMENTED:bookinstance delete GET')
}

exports.bookinstance_delete_post = (req,res) => {
    res.send('NOT IMPLEMENTED:bookinstance delete POST')
}

exports.bookinstance_update_get = (req,res) => {
    res.send('NOT IMPLEMENTED:bookinstance update GET')
}

exports.bookinstance_update_post = (req,res) => {
    res.send('NOT IMPLEMENTED:bookinstance update POST')
}