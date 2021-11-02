const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 8080;

app.set('view engine', 'hbs');
app.set('views', './public/templates');

app.use(express.static(__dirname + '/public/static'));

hbs.registerPartials(__dirname + '/public/templates/partials');

let test = {
    listuser: [{
        info: [{
            name : ['da4a', 'slime', 'geng'],
            id : [321, 421, 421],
            region : ['rus', 'usa', 'ch']
        }]
    }]
}

app.get('/', (req, res) =>{
    res.render('index.hbs', test);
});

app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`);
})
