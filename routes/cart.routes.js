const express = require('express')
const products = require('../data/mydata')

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: false }))


router.post('/add/:id', (req,res)=>{
    const category = req.session.category
    const {id} = req.params
    req.session.cart_counter++;
    req.session.products = req.session.products.map((product)=>{
        if(product.id === id){
            product.quantity+=1
        }
        return product
    })

    if(req.session.category){
        res.status(200).redirect('/home/getProducts/'+category)
    }else{
        res.status(200).redirect('/home/getCategories')
    }
    
})

router.post('/remove/:id', (req,res)=>{
    const {id} = req.params
    req.session.cart_counter--;
    req.session.products = req.session.products.map((product)=>{
        if(product.id === id){
            product.quantity-=1
        }
        return product
    })
    res.status(200).redirect('/cart/getAll')
})

router.get('/getAll', (req,res)=>{
    if(req.session.products){
        res.status(200).render('cart', {products: req.session.products})
    }else{
        req.session.products = products
        req.session.cart_counter = 0
        res.status(200).render('cart', {products: req.session.products})
    }
})

router.post('/increment/:id', (req,res)=>{
    const {id} = req.params
    req.session.cart_counter++;
    req.session.products = req.session.products.map((product)=>{
        if(product.id === id){
            product.quantity+=1
        }
        return product
    })
    res.status(200).redirect('/cart/getAll')
})

router.post('/clear', (req,res)=>{
    req.session.cart_counter = 0;
    req.session.products = req.session.products.map((product)=>{
        product.quantity=0
        return product
    })
    res.status(200).redirect('/cart/getAll')
})

router.all('*', (req,res)=>{
    res.status(404).send('Error 404: Not found')
})


module.exports = router