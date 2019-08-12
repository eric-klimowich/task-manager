// CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    // console.log('Connected correctly!')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Eric',
    //     age: 43
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Keith',
    //         age: 43
    //     }, {
    //         name: 'Steve',
    //         age: 44
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents.')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Get hangers',
    //         completed: true
    //     }, {
    //         description: 'Put bed together',
    //         completed: false
    //     }, {
    //         description: 'Get a job',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents.')
    //     }

    //     console.log(result.ops)
    // })
})