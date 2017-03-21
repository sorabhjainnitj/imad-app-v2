console.log('Loaded!');
var button=document.getElementById('button');
var area=document.getElementById('area');
var cout=1;
button.onclick = function(){
   span.innerHTML=cout.toString();
};

  request.open('GET',"https://sorabhjainnitj.imad.hasura-app.io/counter",true);
  request.send(null);
};