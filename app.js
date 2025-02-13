// External Imports
const express = require("express");
const dotenv = require("dotenv")
// const http = require("http")


// Internal Imports


// configuration
dotenv.config()
app = express()






//Create Server 
app.listen(process.env.PORT, () => {
    console.log(`app listening to port http://localhost:${process.env.PORT}`)
})