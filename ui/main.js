console.log('Loaded!');
var button=document.getElementById('button');
var area=document.getElementById('area');
var cout;
button.onclick = function(){
    var request=new XMLHttpRequest();
    };
    if(request.readystate===XMLHttpRequest.DONE)
    {   if(request.status==200)
        cout=request.responseText;
        area.innerHTML=cout.toString();
    }
var loginbtn=document.getElementById('login');
  loginbtn.onclick=function(){
      
  };
  request.open('POST',"https://sorabhjainnitj.imad.hasura-app.io/counter",true);
  request.send(null);