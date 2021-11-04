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
            inventory: 5
        },
        {
            username: 'Akki',
            avatar: '/image/lt2.jpg',
            money: 11320,
            level: 18,
            inventory: 3
        },
        {
            username: 'da4a',
            avatar: '/image/lt3.jpg',
            money: 4200,
            level: 10,
            inventory: 2
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
            inventory: 2
        },
        {
            username: 'Akki',
            avatar: '/image/lt2.jpg',
            money: 11320,
            level: 18,
            inventory: 3
        },
        {
            username: 'toxic',
            avatar: '/image/lt1.jpg',
            money: 15000,
            level: 20,
            inventory: 5
        },
        {
            username: 'Lemon4ik',
            avatar: '/image/lt4.jpg',
            money: 43200,
            level: 10,
            inventory: 1
        },
        {
            username: 'Haker',
            avatar: '/image/lt10.jpg',
            money: 410,
            level: 3,
            inventory: 0
        },
        {
            username: 'Joker',
            avatar: '/image/lt11.jpg',
            money: 1200,
            level: 1,
            inventory: 3
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

function findUserByName(){
    let ordersName = [];
    let lengthArray = allUsers.users[0].infoUsers.length;
    for (let i = 0; i < lengthArray; i++){
        ordersName.push(allUsers.users[0].infoUsers[i].username);
    }
    return ordersName;
}

app.get('/user/:nickname', (req, res) =>{
    let usernameclick = req.params['nickname'];
    let ordersName = findUserByName();
    let pos = ordersName.findIndex(i => i == usernameclick);
    let infoUser = {
        getUser: [{
            data : [{
                name : usernameclick,
                avatar: allUsers.users[0].infoUsers[pos].avatar,
                level: allUsers.users[0].infoUsers[pos].level,   
                money : allUsers.users[0].infoUsers[pos].money,
                inventory: allUsers.users[0].infoUsers[pos].inventory
            }]
        }],
        title: usernameclick
    };
    res.render('userpage.hbs', infoUser);
});

app.get('/user/:nickname/inventory', (req, res) => {
    res.render('inventory.hbs');
})

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});