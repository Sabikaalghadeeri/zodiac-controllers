const express = require('express')
const app = express()

router.get("/", (req,res)=>{
    res.render('fire.ejs', {fireTraits:['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished','interesting']})
    
})

//leo
router.get('/leo', (req,res)=>{
    res.render('leo.ejs')
})

//aries
router.get('/aries', (req,res)=>{
    res.render('aries.ejs')
})

//sagittarius
router.get('/sagittarius', (req,res)=>{
    res.render('sagittarius.ejs')
})



module.exports = router