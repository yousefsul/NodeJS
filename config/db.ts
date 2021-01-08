const mongoose = require("mongoose")
/* 
Function Connect to MONGO Database Using MOGNO_URI from config file config.env  

*/ 
export {};
const connectDB :any = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`MongoDB connected ${connection.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB

