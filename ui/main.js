console.log('Loaded!');
var button=document.getElementById('button');
var area=document.getElementById('area');

button.onclick = function(){
    var request=new XMLHttpRequest();
    };
    if(request.readyState===XMLHttpRequest.DONE)
    {   if(request.status==200)
    var cout=request.responseText;
        area.innerHTML=cout.toString();
    }

  request.open('GET',"https://sorabhjainnitj.imad.hasura-app.io/counter",true);
  request.send(null);