const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    // в схеме мы указываем какие данные могут быть у пользователя, какого они типа и применяются ли к ним какие-то правила валидации перед записью в bd
    title: {
        type: String, // в виде строки
        required: true, // оно является обязательным
        minLength: 2, // должно состоять минимум из 2 символов
    },
    author: {
        type: String, // в виде строки
        required: true, // оно является обязательным
        minLength: 2, // должно состоять минимум из 2 символов
    },
    year: { 
        type: Number, // в виде числа
        required: true, // оно является обязательным
    },
});

module.exports = mongoose.model('book', bookSchema)
// чтобы вносить изменения в базу данных, обновим Контроллер, там мы импортируем Модель
