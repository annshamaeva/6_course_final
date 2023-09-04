const router = require('express').Router();
const { getBooks, getBook, createBook, updateBook, deleteBook } = require('../controllers/books');

router.get('/books', getBooks);
router.get('/books/:book_name', getBook);
router.post('/books', createBook);
router.patch('/books/:book_name', updateBook);
router.delete('/books/:book_name', deleteBook);

module.exports = router;