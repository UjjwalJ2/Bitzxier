require('dotenv').config()
const wait = require('wait')
const Bitzxier = require(`./structures/Bitzxier.js`)
const client = new Bitzxier()
(async () => {
    await client.initializeMongoose()
    await wait(3000)
    await client.loadEvents()
    await client.loadMain()
    await client.login("TOKEN")
})()
