import Sequelize, { Model } from 'sequelize'

export default class Price extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            preco: {
                type: Sequelize.FLOAT,
                defaultValue: ''
            }
        }, {
            sequelize
        })
    }
}