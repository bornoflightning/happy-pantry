const Sequelize = require('sequelize');
const sequelize = require('./config/connection');

class Pantry extends Sequelize.Model {};

Pantry.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    description: {
        type: Sequelize.STRING,
    },
    preferredBrand: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
    },
    lastPurchased: {
        type: Sequelize.DATE,
    }

},{
    sequelize,//Passing the sequelize instance
    modelName: 'Pantry',
    freezeTableName: true, //PRevent Sequelize from pluralizing the table name
    timestaps: true,
});

module.exports = Pantry;