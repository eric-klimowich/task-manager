// CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    // console.log('Connected correctly!')
    const db = client.db(databaseName)

    db.collection('users').findOne({ name: 'Eric' }, (error, user) => {
        if (error) {
            return console.log('Could not find user.')
        }

        console.log(user)
    })

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