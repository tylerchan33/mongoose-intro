const db = require("./models")



const drinkCRUD = async () => {
    try {
        // //CREATE
        // // way number 1
        // // use the model as a constructor (not that this is not async)
        // const newDrink = new db.Drink({
        //     name: "Chocolate Milk",
        //     rating: 10
        // })
        // // save the result (is async)
        // await newDrink.save() // puts it in the db

        //way number 2
        // // directly create a new entry to the db
        // const secondDrink = await db.Drink.create({
        //     name: "Strawberry Milk",
        //     rating: 10
        // })

        // console.log(secondDrink)
        //READ
        // find many(.find({optional search query})) -returns array
        // const allDrinks = await db.Drink.find({})
        // console.log(allDrinks)
        // allDrinks.forEach(drink => console.log(`drink ${drink.name} is rated ${drink.rating}`))
        // // find one(.findOne({search query})) - returns object
        // const chocoDrink = await db.Drink.findOne({
        //     name: "Chocolate Milk"
        // })

        // console.log(`found the chocky wocky: ${chocoDrink.name} is rated ${chocoDrink.rating}`)
        // // find by id (.findById("mongo id hash"))
        // const strawberryMilk = await db.Drink.findById("633c6eb18601decd1bc3f67e")
        // console.log(`declicious: ${strawberryMilk.name} is rated ${strawberryMilk.rating}`)

        // //UPDATE
        // // find an instance and update it and save it
        // strawberryMilk.rating = 100
        // await strawberryMilk.save()

        // search for something in the database it and update it directly
        //.findOneAndUpdate({query to search for}, {what to update}, {config options})
        // config option of "new: true" will return the updated instance from the database
        const updatedMilk = await db.Drink.findOneAndUpdate({ name: "Choco Milk"}, { rating: 15}, { new: true})
        console.log(updatedMilk)

        // upsert (insert or update)
        // config option -- upsert: true
        const bananaMilk = await db.Drink.findOneAndUpdate({name: "Banana Milk"}, {rating: 6}, { new: true, upsert: true})
        console.log(bananaMilk)
        //DESTROY
        // findOneAndRemove({ search query})
        const removedBanana = await db.Drink.findOneAndDelete({name: "Banana Milk"})
        console.log(removedBanana)
        // findByIdAndRemove("mongo id string")
        const banishedMilk = await db.Drink.findByIdAndDelete("633c6eb18601decd1bc3f67e")
        console.log("banished milk:", banishedMilk)
    } catch(err) {
        console.warn(err)
    }
}

drinkCRUD()