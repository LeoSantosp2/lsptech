import Client from '../models/Client';

import jwt from 'jsonwebtoken';

class TokenController {
    async store(req, res) {
        const { email = '', senha = '' } = req.body;

        if (!email || !senha) {
            return res.status(400).json({
                errors: ['Credenciais inválidas.'],
            });
        }

        const client = await Client.findOne({ where: { email } });

        if (!client) {
            return res.status(400).json({
                errors: ['Usuário Inválido.'],
            });
        }

        if (!client.passwordIsValid(senha)) {
            return res.status(400).json({
                errors: ['Senha Inválida.'],
            });
        }

        const { id } = client;

        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });

        return res.json({ token, client: { id, nome: client.nome, email } });
    }
}

export default new TokenController();
