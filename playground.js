require('./src/db/mongoose')

const Task = require('./src/models/task')

// Task.findByIdAndRemove('60ee2d5a9d02b404742f6160').then((task) => {
//     console.log(task);

//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const findTaskAndRemove = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })

    return { task, count }
}

findTaskAndRemove('60f26dfe6488793ec47ddc2c').then(({ task, count }) => {
    console.log('Removed Task', task);
    console.log('Number of not completed Tasks', count);
}).catch((e) => {
    console.log(e);
})