console.log('Loaded!');
var button=document.getElementById('button');
var area=document.getElementById('area');

var lgnbtn=document.getElementById('submitbtn');
lgnbtn.onclick=function(){ 
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
    request.setRequestHeader('content-type','application/json');
    request.send(JSON.stringify({username: username,password: password }));
    
};
