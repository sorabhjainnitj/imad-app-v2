console.log('Loaded!');
var element1=document.getElementById('count');
var element2=document.getElementById('counter');
var cout=0;
element.onclick = function(){
    cout=cout+1;
    element1.innerHtml=cout.toString();
    
    };
