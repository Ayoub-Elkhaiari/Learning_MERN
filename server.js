const express = require('express') 

const todoRoutes = require('./routes/todoRoutes') ;

const app = express() ;


// app.get('/ayoub', (req, res) => {


//     res.status(200).send("Hello Express.js") ;

// })

app.use("/api/todo",todoRoutes) ;


app.listen(5000, () => {

    console.log("Connected!!!") ;
})

