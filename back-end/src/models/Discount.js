import Sequelize, { Model } from 'sequelize'

export default class Discount extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            valor: {
                type: Sequelize.FLOAT,
                defaultValue: ''
            }
        }, {
            sequelize
        })
    }
}