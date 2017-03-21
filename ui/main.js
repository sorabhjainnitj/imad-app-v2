console.log('Loaded!');
var button=document.getElementById('button');
var area=document.getElementById('area');
var cout=1;
button.onclick = function(){
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE)
    {   if(request.status==200)
       { cout=request.responseText;
        area.innerHTML=cout.toString();
       }
           
       }
};

  request.open('GET','https://sorabhjainnitj.imad.hasura-app.io/counter',true);
  request.send(null);
};