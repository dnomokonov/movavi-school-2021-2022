const express = require('express');
const app = express();
const hbs = require('handlebars');
const port = 8080;

app.set('view engine', 'hbs');
app.set('views', './public/templates');

app.use(express.static(__dirname + '/public/static'));

app.get('/', (req, res) =>{
    let pers = {
        'infoPers': {
            name: ['da4a', 'moon', 'slise'],
            username: ['id321', 'id333', 'id3551']
        }

    }
    res.render('index.hbs', pers);
});

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});