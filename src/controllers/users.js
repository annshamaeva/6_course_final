// создадим шаблон функции для обработки роутов пользователей

const User = require('../models/user');

const getUsers = (request, response) => {
    // Get all users   
    return User.find({}).then(
        (data) => response.status(200).send(data) 
    ).catch(e => response.status(500).send(e.message));
}
const getUser = (request, response) => {
    // Get user
    const { user_id } = request.params; // получили id, который передается в параметре (задаем номер пользователя в адресе сайта после / )
    // response.status(200);
    // response.send(`User with id: ${user_id} `)
    return User.findById(user_id).then(
        (user) => response.status(200).send(user) 
    ).catch(e => response.status(500).send(e.message));
}
const createUser = (request, response) => {
    // Create new user
    //response.status(201);
    //response.send(request.body)
    // создаем пользователя с теми данными, которые мы получаем в запросе
    return User.create({ ...request.body }).then(
        (user) =>  response.status(201).send(user) 
    ).catch(e => response.status(500).send(e.message));
}
const updateUser = (request, response) => {
    // Update user
    const { user_id } = request.params; // получили id, который передается в параметре (задаем номер пользователя в адресе сайта после / )
    return User.findByIdAndUpdate(user_id, { ...request.body }, 
        //indByIdAndUpdate по умолчанию возвращает информацию о пользователе до изменений (то есть старые даннные, даже если мы только что команду на обновление имени), а нам нужно, чтобы возвращались обновленные данные.
        { new: true, runValidators: true }).then(
        (user) =>  response.status(200).send(user) 
    ).catch(e => response.status(500).send(e.message));
}
const deleteUser = (request, response) => {
    // Delete user
    const { user_id } = request.params; // получили id, который передается в параметре (задаем номер пользователя в адресе сайта после / )
    return User.findByIdAndDelete(user_id).then(
        (user) =>  response.status(200).send(Success) 
    ).catch(e => response.status(500).send(e.message));
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}