import express from 'express'
import dotenv from 'dotenv'
import delay from 'express-delay'
import cors from 'cors'

dotenv.config()

import './src/database'

import HomeRoutes from './src/routes/homeRoute'
import RegisterRoutes from './src/routes/registerRoute'
import TokenRoutes from './src/routes/tokenRoutes'
import PriceRoutes from './src/routes/priceRoutes'
import DiscountRoutes from './src/routes/discountRoutes'

const whiteList = [
    'https://lsptech.com.br',
    'http://localhost:3000'
]

const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }
        else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}

class App{
    constructor(){
        this.app = express()
        this.middleware()
        this.routes()
    }

    middleware(){
        this.app.use(cors(corsOptions))
        this.app.use(delay(500))
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())
    }

    routes(){
        this.app.use('/', HomeRoutes)
        this.app.use('/cadastro', RegisterRoutes)
        this.app.use('/token', TokenRoutes)
        this.app.use('/preco', PriceRoutes)
        this.app.use('/desconto', DiscountRoutes)
    }
}

export default new App().app