var express = require('express');
var morgan = require('morgan');
var path = require('path');
const crypto = require('crypto');
var app = express();
app.use(morgan('combined'));

var Pool=require('pg').Pool;
 var config= { user: 'sorabhjainnitj',
             database: 'sorabhjainnitj',
             host: 'db.imad.hasura-app.io',
             port: '5432',
             password: process.env.DB_PASSWORD
};
  function createtemplate(data)
  { var title=data.title;
     var content=data.content;
     var date=data.date;
    var htmltemplate = `<html>
    <head>
   
        <title>${title}</title>
        
         <link href="/ui/style.css" rel="stylesheet" />
    
    </head>
    <body>
     <div class="skjain">
     
        ${content}
       
        <div>${date}
        </div>
         </div>
    </body>
  </html>
`;
     return htmltemplate;
} 
 var pool= new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM article',function(err,result)
    {   if(err)
        {
            res.status(500).send(err.toString());
        }
        else {  res.send(JSON.stringify(result.rows));
            
        }
            
        });
}
);

var counter=0;
 function hash(input,salt){
     var hashed=crypto.pbkdf2(input,salt, 10000, 512, 'sha512');
     return hashed.toString('hex');
 }
app.get('/password/:input',function(req,res){ 
    var hashpassword=hash(request.params.input,'this-is-a-random-string');
    res.send(hashpassword);
});
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
}
);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
    pool.query("SELECT * from articles where title = '" + articleName + "'",function(err,result){
        if(err)
        {
            res.send(err.toString());
        }
        else {
            var data=result.rows[0];
            res.send(createtemplate(data));
        }
    });
 //res.send(createtemplate(articles[articleName]));
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
