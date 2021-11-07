const sqlite3 = require('sqlite3');
const express = require('express');
const hbs = require('handlebars');

let app = express();

app.set('view engine', 'hbs');
app.set('views', './');

app.get('/', (req, res) =>{
    let db = new sqlite3.Database("data.db", function(err){
        if (err){
            return console.log(err);
        }
        console.log('Connect');
    });
    
let query = "SELECT * FROM users";

db.all(query, [], function(err, rows){
    if(err) throw err;        
    let data = {
        'users': rows
    }
    res.render('index.hbs', data);
});

db.close();
})
        /*rows.forEach(function(row) {
            console.log(`id: ${row.id} / ${row.username}`);
        })*/

//let app = express();

/*app.get('/', (req, res){
    
})*/

//app.listen(3000);
