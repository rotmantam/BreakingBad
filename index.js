import express from 'express'
import path from 'path'
import bparser from 'body-parser'

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

// app.use(express.static(path.join(__dirname, 'public')))

import charactersRoute from './controllers/characters.js'
app.use('/characters', charactersRoute)
console.log("3000")
app.use(bparser.urlencoded({extended:false}))
app.use(bparser.json())

const port = 3000
app.listen(port, ()=>{
    console.log("Hallo")
})
