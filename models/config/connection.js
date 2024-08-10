

const { Sequelize } = require('sequelize');

//Create instance of Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite	'
});

//Test connection
sequelize.authenticate()
.then(() => console.log('Database connected...'))
.catch(error => console.log('Error:  + error'));

module.exports = sequelize;