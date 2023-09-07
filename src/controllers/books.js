// создадим шаблон функции для обработки роутов пользователей

const Book = require('../models/books');

const getBooks = (request, response) => {
    // Get all books
    return Book.find({}).then(
        (data) =>  response.status(200).send(data) 
    ).catch(e => response.status(500).send(e.message));
}
const getBook = (request, response) => {
    // Get book
    const { book_id } = request.params; // получили name, который передается в параметре (задаем номер пользователя в адресе сайта после / )
    // response.status(200);
    // response.send(`Book with id: ${book_id} `)
    return Book.findById(book_id).then(
        (book) =>  response.status(200).send(book) 
    ).catch(e => response.status(500).send(e.message));
}
const createBook = (request, response) => {
    // Create new book
    //response.status(201);
    //response.send(request.body)
    // создаем пользователя с теми данными, которые мы получаем в запросе
    return Book.create({ ...request.body }).then(
        (book) =>  response.status(201).send(book) 
    ).catch(e => response.status(500).send(e.message));
}
const updateBook = (request, response) => {
    // Update book
    const { book_id } = request.params; // получили id, который передается в параметре (задаем номер пользователя в адресе сайта после / )
    return Book.findByIdAndUpdate(book_id, { ...request.body },
        { new: true, runValidators: true }).then(
        (book) =>  response.status(200).send(book) 
    ).catch(e => response.status(500).send(e.message));
}
const deleteBook = (request, response) => {
    // Delete book
    const { book_id } = request.params; // получили id, который передается в параметре (задаем номер пользователя в адресе сайта после / )
    return Book.findByIdAndDelete(book_id).then(
        (book) =>  response.status(200).send(Success) 
    ).catch(e => response.status(500).send(e.message));
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}