var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone = {
             title: 'articleone',
             date: '9-sep-2016',
             heading: 'this is the heading of article one',
             content: `<div>
               <h2>and this is the amazing thing </h2>
                 <hr/>
                <div>
                    <p>
                        and this is the content of my first article where i am in and is interesting in coding and many other things.
                    </p>
                </div>
                <div>
                   <p>and this is content of the second paragraph you are having right now.</p>
                </div>
            </div>`
};
  function createtemplate(data){
      var title=data.title;
      var date=data.date;
      var heading=html.heading;
      var content=html.content;
      var htmltemplate= `<html>
                    <head>
                        <title> ${title}</title>
                        
                         <link href="/ui/style.css" rel="stylesheet" />
                    
                    </head>
                    <div class="container">
                    <h1> my professional skills</h1>
                    </div>
                    <a href="www.geeksforgeeks.org">want to code and enjoy real world</a>
                     <div>
                    <a href="/">back to home</a>
                    </div>
                   ${content};
                </html>`;
                return htmltemplate;
      
  }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone', function (req, res) {
  res.send(createtemplate(articleone));
});
app.get('/articletwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
