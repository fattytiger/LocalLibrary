const express = require('express')
const router  = express.Router()

const bookController = require('../controllers/bookController')
const authorController = require('../controllers/authorController')
const genreController = require('../controllers/genreController')
const bookinstanceController = require('../controllers/bookinstanceController')

///BOOK ROUTES///
//catlog home page
router.get('/',bookController.index)

router.get('/book/create',bookController.book_create_get)

router.post('/book/create',bookController.book_create_post)

router.get('/book/:id/delete',bookController.book_delete_get)

router.post('/book/:id/delte',bookController.book_delet_post)

router.get('/book/:id/update',bookController.book_update_get)

router.post('/book/:id/update',bookController.book_update_post)

router.get('/book/:id',bookController.book_detail)

router.get('/books',bookController.book_list)

///AUTHOR ROUTERS///
router.get('/author/create',authorController.author_create_get)

router.post('/author/create',authorController.author_create_post)

router.get('/author/:id/delete',authorController.author_delete_get)

router.post('/author/:id/delete',authorController.author_delete_post)

router.get('/author/:id/update',authorController.author_update_get)

router.post('/author/:id/update',authorController.author_update_post)

router.get('/author/:id',authorController.author_detail)

router.get('/authors',authorController.author_list)

///GENRE ROUTES///
router.get('/genre/create',genreController.genre_create_get)

router.post('/genre/create',genreController.genre_create_post)

router.get('/genre/:id/delete',genreController.genre_delete_get)

router.post('/genre/:id/delete',genreController.genre_delete_post)

router.get('/genre/:id/update',genreController.genre_update_get)

router.post('/genre/:id/update',genreController.genre_update_post)

router.get('/genre/:id',genreController.genre_detaile)

router.get('/genres',genreController.genre_list)

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', bookinstanceController.bookinstance_create_get);

router.post('/bookinstance/create', bookinstanceController.bookinstance_create_post);

router.get('/bookinstance/:id/delete', bookinstanceController.bookinstance_delete_get);

router.post('/bookinstance/:id/delete', bookinstanceController.bookinstance_delete_post);

router.get('/bookinstance/:id/update', bookinstanceController.bookinstance_update_get);

router.post('/bookinstance/:id/update', bookinstanceController.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', bookinstanceController.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', bookinstanceController.bookinstance_list);

module.exports = router