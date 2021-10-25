const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('pub'));
app.use(express.static('static'));

app.use('/', (req, res, next) =>{
    console.log('Хмм, кто-то пытается зайти к нам...');
    next();
})

app.get('/', (req, res) =>{
    //res.sendStatus(418);
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pub/lmain.html');
});

app.get('/test', (req, res) =>{
    console.log(req.query);
    let name = req.query.name;
    res.send(`Hello, ${name}!`);
})

/*app.get('/index.html', (req, res) =>{
    res.sendStatus(200);
})*/
/*app.get('/main', (req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    //res.send('<h1>Текст песни «Ghoul» <br> <h2>Я настоящий гуль, все остальные фейки</h2></h1> <br> <button> <a href="/contact.html">Go in contact</a></button>');
})*/
app.get('/contact', (req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pub/contact.html');
    //res.send('<a href="https://vk.com/da4anom">зайди в вк</a> <br> <button> <a href="/main.html">Go in main</a></button>');
})

app.use((req, res) =>{
    console.log(req);
    res.send('А ну, вышел и зашел обратно');
});

app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`);
});