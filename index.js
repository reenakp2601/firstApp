const express = require("express");
const app = express(); 
const path = require('path');
const redditdata = require("./data.json");

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/rand', (req,res) =>{
    const num = Math.floor(Math.random()*10 )+1;
    res.render('random',{num})
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    const data = redditdata[subreddit];
    res.render('subreddit.ejs',{ ...data});
})
//app.use((req, res) => {
//    console.log("we got a request");
//    res.send({color : 'red'});
//})

app.listen(8080,() => {
    console.log("listening on port 8080")
})