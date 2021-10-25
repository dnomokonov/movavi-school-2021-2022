const express = require('express');
const app = express();
const hbs = require('handlebars');
const port = 8080;

app.set('view engine', 'hbs');
app.set('views', './templates/public');

app.use(express.static(__dirname + '/templates/public'));
//hbs.registerPartial(__dirname + ('/templates/public/partials'));
//hbs.registerPartial(__dirname + ('/templates/public/partials'), '{{header}}');
//hbs.registerPartial(__dirname + ('/templates/public/partials'), '{{footer}}');

app.get('/', (req, res) =>{
    let data = {
        'title': 'my-pages',
        'name': 'Da4a',
        'surname': 'Nomokonov',
        'age': 22,
        'height': '176',
        'img-file': '/static/lt.jpg',
        'd': {'mon': ['mon', 'der', 'tex'], 'tue': ['21', '31', '32'], 'wrp': ['123', '321', '532']}
    }
    res.render('index.hbs', data);
});

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});