const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')


app.set('view engine','ejs')
app.use(ejsLayouts) 








app.listen (PORT, ()=>{
    console.log(`You're running the aheba-akerha app!`)
})