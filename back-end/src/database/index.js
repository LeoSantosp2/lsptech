import Sequelize from 'sequelize'
import dataBaseConfig from '../config/database'

import Client from '../models/Client'
import Price from '../models/Price'
import Discount from '../models/Discount'

const models = [Client, Price, Discount]

const connection = new Sequelize(dataBaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))