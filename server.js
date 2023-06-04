const express = require('express')
const path = require('path')
const app = express()
const session = require('express-session')

const homeRouter = require('./routes/home.routes')
const cartRouter = require('./routes/cart.routes')
//const cartRouter = require('./routes/cart.routes')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: 'tajni_kljuc',
    resave: false,
    saveUninitialized: true
    }
))

app.use('/', homeRouter)
app.use('/home', homeRouter)
app.use('/cart', cartRouter)



app.listen(3000, ()=>{
    console.log('Listening on port 3000...')
})