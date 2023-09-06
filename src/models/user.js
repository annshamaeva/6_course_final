const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // в схеме мы указываем какие данные могут быть у пользователя, какого они типа и применяются ли к ним какие-то правила валидации перед записью в bd
    name: {
        type: String, // в виде строки
        required: true, // оно является обязательным
        minLength: 2, // должно состоять минимум из 2 символов
    },
    username: {
        type: String, // в виде строки
        required: true, // оно является обязательным
        minLength: 2, // должно состоять минимум из 2 символов
    },
    email: {
        type: String, // в виде строки
        required: true, // оно является обязательным
        minLength: 2, // должно состоять минимум из 2 символов
    },
    books: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }],
        default: [],
      }
});

module.exports = mongoose.model('user', userSchema)
// чтобы вносить изменения в базу данных, обновим Контроллер, там мы импортируем Модель
