const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const port = 8080;
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', './public/templates');

app.use(express.static(__dirname + '/public/static'));

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: path.join(__dirname, 'public/templates/partials')
}))

app.get('/', (req, res) =>{
    let pers = {
        'profil': [{
            'info': [{
                'name': 'Барака',
                'region': 'Таркатан',
                'image': '/image/lt1.jpg'
            },
            {
                'name': 'Бэтмен',
                'region': 'США',
                'image': '/image/lt2.jpg'
            },
            {
                'name': 'Кенши',
                'region': 'Япония',
                'description': 'Персонаж из мк 11. Персонаж базового уровня.'
            },
            {
                'name': 'Кун Лао',
                'region': 'Китай',
                'image': '/image/lt4.jpg',
                'description': 'Персонаж из мк 11. Оружие: шляпа с базара.'
            },
            {
                'name': 'Китана',
                'region': 'Эдения',
                'image': '/image/lt5.jpg',
                'description': 'Персонаж из мк 11. Неплохая женщина.'
            },
            {
                'name': 'Милина',
                'region': 'Внешний Мир',
                'description': 'Персонаж из мк 11. Любит малину.'
            },
            {
                'name': 'Саб-Зиро',
                'region': 'Китай',
                'image': '/image/lt7.jpg',
                'description': 'Персонаж из мк 11. Оружие: мятная жувачка и холодная кока-кола.'
            },
            {
                'name': 'Скорпион',
                'region': 'Япония',
                'image': '/image/lt8.jpg',
                'description': 'Персонаж из мк 11. Оружие: цыганский кулон.'
            },
            {
                'name': 'Соня Блейд',
                'region': 'США',
                'description': 'Персонаж из мк 11. Первый женский персонаж в мк'
            },
            {
                'name': 'Хищник',
                'region': 'Яутжа',
                'image': '/image/lt10.jpg'
            }
        ]
        }]
    }
    res.render('index.hbs', pers);
});

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});