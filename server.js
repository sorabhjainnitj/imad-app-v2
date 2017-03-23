var express = require('express');
var morgan = require('morgan');
var path = require('path');
const crypto = require('crypto');
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
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
    pool.query('SELECT * FROM articles',function(err,result)
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
     var hashed=crypto.pbkdf2Sync(input,salt, 10000, 512, 'sha512');
     return ['pbkdf2','10000','salt',hashed.toString('hex')].join('$');
 }
app.get('/hash/:input',function(req,res){ 
    var hashpassword=hash(req.params.input,'this-is-a-random-string');
    res.send(hashpassword);
});
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.post('/createuser',function(req,res)
{  var username=req.body.username;
   var password=req.body.password;
   var hashpassword=hash(password,'this-is-random-string');
   pool.query('insert into "user" (username,password) VALUES ($1,$2)',[username,hashpassword],function(err,result)
     {
         if(err)
         { res.send(err.status(404).toString());
             
         }
         else{
             res.send('user created successfully with username ' +username);
         }
   });
    
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;

app.get('/articles/:articleName', function (req, res) {
    var articlename=req.params.articleName;
    pool.query("SELECT * from articles where title = $1", [articlename] ,function(err,result){
        if(err)
        {     res.send(err.toString());
        }
        else {
              var data=result.rows[0];
              res.send(createtemplate(data));
            }
    });
});
app.post('/login',function(req,res){
    var username=req.body.username;
   var password=req.body.password;
   pool.query('select * from  "user" where username=$1 ',[username],function(err,result)
     {
         if(err)
         { res.status(500).send(err.status(404).toString());
         }
         else{ if(result.rows.length===0)
                {res.status(404).send('credintials are invalid');
                }
               else { var matchstring=result.rows[0].password;
                     var salt=matchstring.split('$')[2];
                      var comestring=hash(password,salt);
                      if(comestring===matchstring)
                      {
                       res.status(200).send('you have been logged in successfully');
                      }
                      else {
                          res.status(404).send('credintials are invalid');
                      }
                    }
            
         }
   });
});
app.get('/submitname/:getname',function(req,res){
    
     res.send(inputname.toString()); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
