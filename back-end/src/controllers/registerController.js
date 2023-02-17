import Client from '../models/Client';

class RegisterController {
    async index(req, res) {
        try {
            const clients = await Client.findAll({ attributes: ['id', 'nome', 'sobrenome', 'email', 'telefone'] });

            return res.json(clients);
        } catch (e) {
            console.log(e);
        }
    }

    async store(req, res) {
        try {
            const newClient = await Client.create(req.body);

            if (newClient.senha !== newClient.confirmar_senha) {
                await newClient.destroy();

                return res.status(400).json({
                    errors: ['Senhas não coincidem.'],
                });
            }

            const { id, nome, sobrenome, email, telefone } = newClient;

            return res.json({ id, nome, sobrenome, email, telefone });
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

            const client = await Client.findByPk(req.params.id);

            if (!client) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                });
            }

            await client.destroy();

            return res.json('Usuário excluido com sucesso.');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new RegisterController();
