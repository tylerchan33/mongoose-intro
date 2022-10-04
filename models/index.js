// require the mongoose package
const mongoose = require("mongoose")
// tell mongoose what our database uri is and connect to it
const uri = "mongodb://127.0.0.1/mongooseIntro"
mongoose.connect(uri)
// use mongoose's connection methods to validate the database connection (useful console.logs)
const db = mongoose.connection
// connection success
db.once("open", () => console.log(`mongoDB connected @ ${db.host}:${db.port}`))
// connection failure (must supply mongoose with strings that it's familiar with so need to use error and open)
db.on("error", (err) => console.warn("the data center has burned down", err))
// export all of our mongoose models from this file
module.exports = {
    Drink: require("./Drink")
}