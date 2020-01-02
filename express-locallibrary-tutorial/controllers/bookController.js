var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

const async = require('async')

exports.index = (req,res) => {

    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
}

exports.book_list = (req,res) => {
    Book.find({},'title author')
    .populate('author')
    .exec((err,list_books) => {
        if(err){return next(err)}
        res.render('book-list',{title:'Book List',book_list:list_books})
    })
}

exports.book_detail = (req,res) => {
    res.send('NOT IMPLEMENTED:book detailes' + req.params.id)
}

exports.book_create_get = (req,res) => {
    res.send('NOT IMPLEMENTED:book create GET')
}

exports.book_create_post = (req,res) => {
    res.send('NOT IMPLEMENTED:book create POST')
}

exports.book_delete_get = (req,res) => {
    res.send('NOT IMPLEMENTED:book delete GET')
}

exports.book_delet_post = (req,res) => {
    res.send('NOT IMPLEMENTED:book delete POST')
}

exports.book_update_get = (req,res) => {
    res.send('NOT IMPLEMENTED:book update GET')
}

exports.book_update_post = (req,res) => {
    res.send('NOT IMPLEMENTED:book update POST')
}