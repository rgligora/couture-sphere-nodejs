const express = require('express')
const path = require('path')
const products = require('../data/mydata')



const router = express.Router()

router.use(express.json())

router.get('/', (req,res)=>{
    if(req.session.products){
        res.status(200).render('home', {current_category: "ALL CATEGORIES",products: req.session.products, cart_count: req.session.cart_counter})
    }else{
        req.session.products = products
        req.session.cart_counter = 0
        res.status(200).render('home', {current_category: "ALL CATEGORIES",products: req.session.products, cart_count: req.session.cart_counter})
    }
    
    
})

router.get('/getCategories', (req,res)=>{
    req.session.category = undefined
    if(req.session.products){
        res.status(200).render('home', {current_category: "ALL CATEGORIES",products: req.session.products, cart_count: req.session.cart_counter,scrollPosition: req.session.scrollPosition})
    }else{
        req.session.products = products
        req.session.cart_counter = 0
        res.status(200).render('home', {current_category: "ALL CATEGORIES",products: req.session.products, cart_count: req.session.cart_counter,scrollPosition: req.session.scrollPosition})
    }
    
})

router.get('/getProducts/:category', (req,res)=>{
    const {category} = req.params
    req.session.category = category
    if(req.session.products){
        const newProducts = req.session.products.filter((product) => product.category === category)
        res.status(200).render('home', {current_category: category,products: newProducts, cart_count: req.session.cart_counter,scrollPosition: req.session.scrollPosition})
    }else{
        req.session.products = products
        req.session.cart_counter = 0
        const newProducts = req.session.products.filter((product) => product.category === category)
        res.status(200).render('home', {current_category: category,products: newProducts, cart_count: req.session.cart_counter,scrollPosition: req.session.scrollPosition})
    }
    
})

router.all('*', (req,res)=>{
    res.status(404).send('Error 404: Not found')
})

module.exports = router