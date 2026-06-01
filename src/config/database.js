const mongoose = require("mongoose")
const dns =require("dns")

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])


async function connectToDB() {
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully!");
    } catch (error) {
        console.log(error.message);
    }

}
module.exports=connectToDB;