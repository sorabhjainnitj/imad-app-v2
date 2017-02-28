console.log('Loaded!');
var button=document.getElementById('count');
var count=document.getElementById('counter');
var cout=0;
button.onclick = function(){
    cout=cout+1;
    count.innerHtml = cout.toString();
    
    };
