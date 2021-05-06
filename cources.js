const express = require('express');
const router = express.Router();

router.get('/cources', function(req,res){
    var out = `<h2>Welcome To Cources Tutorial</h2><br/>`;
    out += `<a href="/cources">Courses Index Page</a><br/>`;
    out += `<a href="/cources/angular">Welcome To Angular Page</a><br/>`;
    out += `<a href="/cources/react">Welcome To React Page</a><br/>`;
    out += `<a href="/cources/vue">Welcome To Vue Page</a><br/>`;
    res.send(out);
});

router.get('/cources/angular', function(req,res){
    var out = `<h2>Welcome To Angular Tutorial</h2><br/>`;
    out += `<a href="/cources">Courses Index Page</a><br/>`;
    out += `<a href="/cources/angular">Welcome To Angular Page</a><br/>`;
    out += `<a href="/cources/react">Welcome To React Page</a><br/>`;
    out += `<a href="/cources/vue">Welcome To Vue Page</a><br/>`;
    res.send(out);
});

router.get('/cources/react', function(req,res){
    var out = `<h2>Welcome To React Tutorial</h2><br/>`;
    out += `<a href="/cources">Courses Index Page</a><br/>`;
    out += `<a href="/cources/angular">Welcome To Angular Page</a><br/>`;
    out += `<a href="/cources/react">Welcome To React Page</a><br/>`;
    out += `<a href="/cources/vue">Welcome To Vue Page</a><br/>`;
    res.send(out);
});

router.get('/cources/vue', function(req,res){
    var out = `<h2>Welcome To Vue Tutorial</h2><br/>`;
    out += `<a href="/cources">Courses Index Page</a><br/>`;
    out += `<a href="/cources/angular">Welcome To Angular Page</a><br/>`;
    out += `<a href="/cources/react">Welcome To React Page</a><br/>`;
    out += `<a href="/cources/vue">Welcome To Vue Page</a><br/>`;
    res.send(out);
});

module.exports = router;