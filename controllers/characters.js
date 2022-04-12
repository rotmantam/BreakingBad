import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()


router.get('/', async(req,res)=>{
    const url = 'https://www.breakingbadapi.com/api/characters'
    const dataResponse = await fetch(url, {method:'get'})
    const data  = await dataResponse.json()
    res.render('characters', {
        data: data
    })
    console.log(data)
})

export default router 

router.get('/:id', async(req, res)=>{
    const url = `https://www.breakingbadapi.com/api/characters/${req.params.id}`
    const dataResponse = await fetch(url, {method:'get'})
    const data  = await dataResponse.json()
    console.log(data)
    res.render('characterDetail', {
        data: data
    })
})