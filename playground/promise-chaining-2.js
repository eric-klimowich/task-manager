require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d5299588ab38b36d5ee651e').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d52968cb6850a35858abf72').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})