const { Router, request } = require('express'); 
const { connectToDatabase } = require('../database/database-connection');
const { ObjectId } = require('mongodb');

const userRouter = Router();

async function connectToDatabaseAndGetUserCollection() {
    const db = await connectToDatabase(); 
    return db.collection('users');
}

userRouter.post('/', async (request, response) => {
    const usersTable = await connectToDatabaseAndGetUserCollection();
    const result = await usersTable.insertOne(request.body);
    response.send(result);
})

userRouter.get('/', async (request, response) => {
    const usersTable = await connectToDatabaseAndGetUserCollection();
    const users = await usersTable.find().toArray();
    response.render('users', {
        users
    })
})

userRouter.get('/:id', async (request, response) => {
    const { id } = request.params;
    const usersTable = await connectToDatabaseAndGetUserCollection();
    const user = await usersTable.findOne({ _id: new ObjectId(id)});
    response.render('user-by-id', {
        firstName: user.firstName,
        lastName: user.lastName
    });
})

userRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;
    const usersTable = await connectToDatabaseAndGetUserCollection();
    await usersTable.findOneAndDelete({  _id: new ObjectId(id) });
    response.send();
})

exports.userRouter = userRouter;