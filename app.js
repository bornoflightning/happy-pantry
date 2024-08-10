const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const sequelize = require('./models/config/connection');
const Pantry = require('./models/Pantry');


const app = express();
const PORT = process.env.PORT || 5001;

// set handlebars as the view engine
app.engine('handlebars', expressHandlebars.engine({
    extname: 'handlebars',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts') }));
app.set('view engine', 'handlebars');


//set server static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));



//set up routes
app.get('/', (req, res) => {
    res.render('home');
});


//Sync models and start the server
sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
