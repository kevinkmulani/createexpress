const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(cookieParser());
app.use(session({secret:"SWTkffi8?%xHM+mv;Q#pJg'P7Dw%)y<}PPSq~-D7/<{d}+)GPu?MV+nw[;5gARR"}));


app.get('/session_test', function(req, res){
    if(req.session.count)
    {
        req.session.count++;
        res.send("count: " + req.session.count);
    }
    else{
        req.session.count = 1;
        res.send("Welcome First time count: " + req.session.count);
    }
});
app.get('/', function(req, res){
    res.render('example');
});
app.get('/cookie_test', function(req,res){
    res.cookie("username","kevinmulani", {maxAge:10000});
    //res.cookie("password","kevin@123");
    res.send("Cookie Start");
});

app.get('/cookie_check', function(req, res){
    //var temp = JSON.stringify(req.cookies);
    res.send("value: " + req.cookies.username);
});

app.get('/cookie_clear', function(req, res){
    //var temp = JSON.stringify(req.cookies);
    res.clearCookie("username");
    res.send("value: " + req.cookies.username);
});

app.listen(80);
// function infoweb(req, res, next){
//     var person ={
//         name:"kevin",
//         username:"mulani"
//     }
//     req.person = person;
//     next();
// }
// app.use(infoweb);
// app.use('/profile/:id([0-4]{1})', function(req, res, next){
//     var namperson = ['ram','divyash','amesh','ronaldo','kevin'];
//     req.name = namperson[req.params.id];
//     next();
// });

// app.get('/', function(req, res){
//     res.send("name: " + req.person.name + "<br/>username: " + req.person.username);
// });
// app.get('/profile/:id([0-4]{1})', function(req,res){
//     res.send("array register: " + req.name);
// });
//const cources = require('./cources');
//app.use('/', cources);