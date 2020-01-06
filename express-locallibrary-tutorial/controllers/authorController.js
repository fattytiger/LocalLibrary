const async  = require('async')
const book   = require('../models/book')
const Author = require('../models/author')
exports.author_list = (req,res,next) => {
    Author.find()
    .sort([['family_name','ascending']])
    .exec((err,list_authors) => {
        if(err) { return next(err)}
        res.render('author-list',{title:'Author list',author_list:list_authors})
    })
}

exports.author_detail = (req,res,next) => {
    async.parallel({
        author:function(callback){
            Author.findById(req.params.id)
            .exec(callback)
        },
        authors_book:function(callback){
            book.find({'author':req.params.id},'title summary')
            .exec(callback)
        }
    },(err,result) => {
        if(err){ return next(err) }
        if(result.author == null){
            let err = new Error('Author not found')
            err.status = 404
            return next(err)
        }
        res.render('author-detail',{title:'Author Detail',author:result.author,author_books:result.authors_book})
    })
}

exports.author_create_get = (req,res) => {
    res.send('NOT IMPLEMENTED:Author create GET')
}

exports.author_create_post = (req,res) => {
    res.send('NOT IMPLEMENTED:Author create POST')
}

exports.author_delete_get = (req,res) => {
    res.send('NOT IMPLEMENTED:Author delete GET')
}

exports.author_delete_post = (req,res) => {
    res.send('NOT IMPLEMENTED:Author delete POST')
}

exports.author_update_get = (req,res) => {
    res.send('NOT IMPLEMENTED:Author update GET')
}

exports.author_update_post = (req,res) => {
    res.send('NOT IMPLEMENTED:Author update POST')
}