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
var gname=document.getElementbyId('name');
var submit=document.getElementbyId('submit');
submit.onclick=function(){
    var names=['name1','name2','name3'];
var list='';
for(var i=0;i<names.length;i++)
{
    list=list+'<li>' +names[i]+'</li>';
}
var ole=document.getElementbyId('namelist');
    ole.innerHTML=list.toString();
};

