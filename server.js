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
             password: process.env.sorabhjainnitj
};



var articles ={
    'article-one':{
                    date: '24-may-2015',
                    content:'this is the content of the first article i am fedding out.', 
                    title: 'jee advance 2015'
    },
    
    'article-two':{
                        
                        title:'my second web page sorabh jain',
                     date: '24-may-2015',
                    content:`
                     
                            <div>
                            <h1> my professional second skills</h1>
                            </div>
                            <a href="www.geeksforgeeks.org">want to code and enjoy real world</a>
                            
                             <div>
                            <a href="/">back to home</a>
                            </div>
                        
                            <div>
                                <h2>and this is the amazing thing </h2>
                                <hr/>
                                this button <button id="counter">click me</button> has been pressed <span id="count">0</span>times
                                <hr/>
                                <div>date is febuary2017</div>
                                <div>
                                    <p>
                                        and this is the content of my first article where i am in and is interesting in coding and many other things.
                                    </p>
                                </div>
                                <div>
                                   <p>and this is content of the second paragraph you are having right now.</p>
                                </div>
                            </div>
                     </div>`
                     
                
    }
};
  
  function createtemplate(data)
  { var title=data.title;
     var content=data.content;
    var htmltemplate = `<html>
    <head>
   
        <title>${title}</title>
        
         <link href="/ui/style.css" rel="stylesheet" />
    
    </head>
    <body>
     <div class="skjain">
        ${content}
        </div>
    </body>
  </html>
`;
     return htmltemplate;
} 
 var pool= new Pool(config);
app.get('/database',function(req,res){
    pool.query('SELECT * FROM "article"',function(err,result)
    {   if(err)
    {
        req.status(500).send(err.toString());
    }
    else {  req.send(JSON.stringify(result));
        
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
    req.send(hashpassword);
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
 res.send(createtemplate(articles[articleName]));
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
