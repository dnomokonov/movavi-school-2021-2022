const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

app.set('view engine', 'hbs');
app.set('views', './public/templates');

app.use(express.static(__dirname + '/public/static'));

hbs.registerPartials(__dirname + '/public/templates/partials');

let usertop = {
    profil: [{
        info: [{
            username: 'toxic',
            avatar: '/image/lt1.jpg',
            money: 15000,
            level: 20,
            inventory: 25
        },
        {
            username: 'akki',
            avatar: '/image/lt2.jpg',
            money: 11320,
            level: 18,
            inventory: 19
        },
        {
            username: 'da4a',
            avatar: '/image/lt3.jpg',
            money: 4200,
            level: 10,
            inventory: 15
        }
    ]
    }]
};

let allUsers = {
    users: [{
        infoUsers: [{
            username: 'da4a',
            avatar: '/image/lt3.jpg',
            money: 4200,
            level: 10,
            inventory: 15
        },
        {
            username: 'Akki',
            avatar: '/image/lt2.jpg',
            money: 4200,
            level: 10,
            inventory: 15
        },
        {
            username: 'toxic',
            avatar: '/image/lt1.jpg',
            money: 4200,
            level: 10,
            inventory: 15
        },
        {
            username: 'Lemon4ik',
            avatar: '/image/lt4.jpg',
            money: 4200,
            level: 10,
            inventory: 15
        },
        {
            username: 'Haker',
            avatar: '/image/lt10.jpg',
            money: 4200,
            level: 10,
            inventory: 15
        },
        {
            username: 'Joker',
            avatar: '/image/lt11.jpg',
            money: 4200,
            level: 10,
            inventory: 15
        },
    ]
    }]
};

app.get('/', (req, res) =>{
    res.render('index.hbs', usertop);
});

app.get('/users', (req, res) =>{
    res.render('users.hbs', allUsers);
});

app.get('/user/:nickname', (req, res) =>{
    let usernameclick = req.params['nickname'];
    let infoUser = {
        getUser: [{
            data : [{
                name : usernameclick,
                avatar: '',
                level: '',
                inventory: ''
            }]
        }],
        title: usernameclick
    };
    res.render('userpage.hbs', infoUser);
})

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});