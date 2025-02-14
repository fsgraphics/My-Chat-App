// External imports
const createError = require("http-errors");

// Internal imports


// 404 not found handler
function notFoundHandler (req, res, next){
    next(404, "Your Request connection was not found!")
}

// Default Error Handler 
function errorHandler (req, res, next){

}


module.exports= {
    notFoundHandler,
    errorHandler
}