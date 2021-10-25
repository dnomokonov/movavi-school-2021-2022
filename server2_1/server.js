const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/templates/index.html');
})

app.get('/login', (req, res) =>{
    let login = req.query.login;
    let passw = req.query.password;
    if (login == 'da4a' && passw == 'admin'){
        res.send('Добро пожаловать!');
    }else{
        res.send('Неверно введен логин или пароль <br> <a href='/'>Домой</a>');
    };
})

app.get('/math1' , (req, res) =>{
    let meaning1 = req.query.mean1;
    let meaning2 = req.query.mean2;
    if (isNaN(Number(meaning1)) == false && isNaN(Number(meaning2)) == false){
        res.send(`${meaning1} + ${meaning2} = ${Number(meaning1) + Number(meaning2)}`);
    }else{
        res.redirect('/math');
    }
})

const arrayCountry = new Map([
    ['Австралия', 'Канберра'],
    ['Россия', 'Москва'],
    ['Казахстан', 'Астана'],
    ['Америка', 'Ваышингтон']
]);

app.get('/country', (req, res) =>{
    let nameCountry = req.query.nameCount;
    if (arrayCountry.has(nameCountry)){
        res.send(`Столица: ${arrayCountry.get(nameCountry)}`);
    }
        res.redirect('/addName');
});

app.get('/newname', (req, res) => {
    let newCountry = req.query.nameNewCount;
    let newCapital = req.query.nameNewCapital;
    if (newCountry != '' || newCapital != ''){
        arrayCountry.set(newCountry, newCapital);
        console.log(arrayCountry);
        res.redirect('/math');
    }else{
        res.redirect('/addName');
    }
});

app.get('/colorbox', (req, res) =>{
    let nameColor = req.query.color;
    if (nameColor){
        res.send(`<div style='width: 50px; height: 50px; background-color: ${nameColor}'></div>`);
    }else{
        res.redirect('/math');
    }
});

app.get('/:page', (req, res)=> {
    pagename = req.params['page'];
    res.sendFile(__dirname + '/templates/' + pagename + '.html');
});

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});