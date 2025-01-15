const mongoose = require('mongoose')

exports.connectDB = ()=>{
    mongoose.connect("mongodb+srv://freindshubhampatel:fgUtmAFZZ2zGu3fk@meetxdb.7wani.mongodb.net/")
    .then(()=> {
        console.log("DB Connection Successful...")
    })
    .catch(()=>{
        console.log("Error Occured while DB Connection")
    })
}