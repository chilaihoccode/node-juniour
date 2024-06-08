const mongoose = require('mongoose')

async function connectDB () {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ex1_education_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Success Connect !!!')
    } catch (error) {
        console.log('Fail Connect!!!')
    }
}

module.exports = { connectDB }