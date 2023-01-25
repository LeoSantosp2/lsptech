import jwt from 'jsonwebtoken'

import Client from '../models/Client'

export default async (req, res, next) =>{
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({
            errors: ['Necessário Fazer Login.']
        })
    }

    const [text, token] = authorization.split(' ')

    try{
        const datas = jwt.verify(token, process.env.TOKEN_SECRET)

        const {id, email} = datas

        const client = await Client.findOne({where: { id, email }})

        if(!client){
            return res.status(400).json({
                errors: ['Usuário Inválido.']
            })
        }

        req.clientId = id
        req.clientEmail = email

        return next()
    }
    catch(e){
        return res.status(401).json({
            errors: ['Token Expirado ou Inválido.']
        })
    }
}