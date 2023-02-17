import Discount from '../models/Discount';

class DiscountController {
    async index(req, res) {
        try {
            const discount = await Discount.findAll({ attributes: ['id', 'nome', 'valor'] });

            return res.json(discount);
        } catch (e) {
            console.log(e);
        }
    }

    async store(req, res) {
        try {
            await Discount.create(req.body);

            return res.json('Desconto adicionado na tabela.');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async delete(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não enviado.'],
                });
            }

            const discount = await Discount.findByPk(req.params.id);

            if (!discount) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                });
            }

            await discount.destroy();

            return res.json('Usuário excluido com sucesso.');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const discount = await Discount.findByPk(id);

            if (!discount) {
                return res.status(400).json({
                    errors: ['Desconto não existe.'],
                });
            }

            await discount.update(req.body);

            return res.json('Desconto atualizado com sucesso.');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new DiscountController();
