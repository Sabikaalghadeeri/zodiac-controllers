const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')

//MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//controllers middleware
app.use('/water', require('./controllers/water'))
app.use('/earth', require('./controllers/earth'))
app.use('/air', require('./controllers/air'))
app.use('/fire', require('./controllers/fire'))


//HOME route
app.get("/", (req,res)=>{
    res.render('index.ejs')
    
})



app.listen (PORT, ()=>{
    console.log(`You're testing the page!`)
})