const http = require('http')

// const servermain = http.createServer((req, res) => {
//     res.end("Hello world the server is running");

// })

//- routing with url() method

// const servermain = http.createServer((req, res) => {
//     if (req.url == "/about") {
//         res.end("this is the about us page")
//     }
//     else if (req.url == "/contact") {
//         res.end("This is the contact us page")
//     }

//     else if (req.url == "/") {
//         res.end("This is the homepage")
//     }
// })

// servermain.listen(3000)

//- doing everything with express instead of http. But express uses http only

// const express = require('express');

// const app = express()  //-all functionalities of express is in the app now


// app.get('/', (req, res) => {
//     res.send("This is the homepage")
// })

// app.get('/about', (req, res) => {
//     res.send("This is the about page")
// })

// app.get('/contact', (req, res) => {

//     res.send("This is contact us page")
//     document.write("hello")
// })

// app.listen(4000);


//- rendering custom pages

const express = require("express")

const app = express()

app.set('view engine', 'ejs')   //- this is for using the view engine to render pages

//-the pages are fetched from inside views folder

//- extension of these page files are .ejs 

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(4000)