console.log('Loaded!');
var button=document.getElementById('button');
var area=document.getElementById('area');

var createuserbtn=document.getElementById('submitbtn');
createuserbtn.onclick=function(){ 
    var areaname=document.getElementById('userlog');
    var username=document.getElementById('name').value;
     var password=document.getElementById('userpassword').value;
     console.log(username);
     console.log(password);
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
          { if(request.status===200)
            { areaname.innerHTML='you have been registered successfully';
            }
          }
    };
    request.open('POST','http://sorabhjainnitj.imad.hasura-app.io/createuser',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password }));
    
};
var  lgnbtn=document.getElementById('login');
lgnbtn.onclick=function(){ 
    var areaname=document.getElementById('userlog');
    var username=document.getElementById('name').value;
     var password=document.getElementById('userpassword').value;
     console.log(username);
     console.log(password);
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
          {  if(request.status===500)
             {   alert('something went wrong on the server');
             }
              if(request.status===200)
            { alert('you have been logged in successfully');
            }
            else if(request.status===404)
            {   alert(' username or password is incorrect');
             }
          }
    };
    request.open('POST','http://sorabhjainnitj.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password }));
    
};