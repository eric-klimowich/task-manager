// CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
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

    // db.collection('users').deleteMany({
    //     age: 44
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteOne({
        _id: new ObjectID("5d51ae4f63f50000eab902d5")
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5d51ae21f81bd600b32ee8af")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d51ae21f81bd600b32ee8af")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({ name: 'Eric' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch.')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5d51b9c2962a7d044ad8c441") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch.')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 43 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(users)
    // })

    // db.collection('users').find({ age: 43 }).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5d51bb3f31542f04d4c45d72") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch.')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to fetch.')
    //     }

    //     console.log(tasks)
    // })

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