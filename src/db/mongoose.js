const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const me = new User({
//     name: '     Eric        ',
//     email: '      EKLIMOWICH@GMAIL.COM      ',
//     password: '        thisiscorret   '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const newTask = new Task({
    description: 'Get groceries'
})

newTask.save().then(() => {
    console.log(newTask)
}).catch((error) => {
    console.log('Error!', error)
})