import Sequelize, { Model } from 'sequelize'
import bcryptjs from 'bcryptjs'

export default class Client extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já cadastrado.'
                },
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido.'
                    }
                }
            },

            telefone: {
                type: Sequelize.BIGINT,
                defaultValue: ''
            },

            senha_hash: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            senha: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8, 24],
                        msg: 'Senha tem que ter entre 8 e 24 caracteres.'
                    }
                }
            },

            confirmar_senha_hash: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            confirmar_senha: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'O campo "Confirmar Senha" não pode estar vazio.'
                    }
                }
            }
        }, {
            sequelize
        })

        this.addHook('beforeSave', async client =>{
            if(client.senha){
                client.senha_hash = await bcryptjs.hash(client.senha, 8)
            }
        })

        this.addHook('beforeSave', async client =>{
            if(client.confirmar_senha){
                client.confirmar_senha_hash = await bcryptjs.hash(client.confirmar_senha, 8)
            }
        })

        return this
    }

    passwordIsValid(password){
        return bcryptjs.compare(password, this.senha_hash)
    }
}