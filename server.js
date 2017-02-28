var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
    'article-one':{
                    date: '24-may-2015',
                    content:'this is the content of the first article i am fedding out.', 
                    title: 'jee advance 2015'
    },
    'article-two':{
                        
                        title :'my second web page sorabh jain',
                    
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
  function createtemplate (data)
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