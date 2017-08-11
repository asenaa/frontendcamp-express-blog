const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const db = require('./db')

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', function (req, res){
    res.render('index.html', { posts: db })
})

app.get('/:id', function (req, res){
    const id = req.params.id
    const post = db.find(function (item){
        return item.id == id
    })
    res.render('details.html', { post: post })
})


app.listen(3000, function(){
    console.log('Express blog is started at localhost:3000')
})