console.log('Loaded!');
var button=document.getElementById('button');
var area=document.getElementById('area');
var cout=1;
button.onclick = function(){
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE)
    {   if(request.status===200)
       { var couter=request.responseText;
        area.innerHTML=couter.toString();
       }
           
       }
};

  request.open('GET','http://sorabhjainnitj.imad.hasura-app.io/counter',true);
  request.send(null);
};
var namelisting=document.getElementbyId('namelist');
var inputbutton=document.getElementbyId('submit');
inputbutton.onclick=function(){
var name1=doucment.getElementbyId('name');
namelisting.innerHTML=name1.
name1.value;
};