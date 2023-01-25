import Price from "../models/Price";

class PriceController{
    async index(req, res){
        try{
            const prices = await Price.findAll({attributes: ['id', 'nome', 'preco']})

            return res.json(prices)
        }
        catch(e){
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })
        }
    }

    async store(req, res){
        try{
            await Price.create(req.body)

            res.json('Preço cadastrado com sucesso!')
        }
        catch(e){
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })
        }
    }

    async update(req, res){
        try{
            const { id } = req.params

            if(!id){
                return res.status(400).json({
                    errors: ['Id não foi informado.']
                })
            }

            const price = await Price.findByPk(id)

            if(!price){
                return res.status(400).json({
                    errors: ['Preço não existe.']
                })
            }

            await price.update(req.body)

            return res.json('Alterado com sucesso.')
        }
        catch(e){
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })
        }
    }
}

export default new PriceController()