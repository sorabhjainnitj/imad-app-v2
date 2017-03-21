console.log('Loaded!');
var button=document.getElementById('button');
var area=document.getElementById('area');
var cout=0;
button.onclick = function(){
    cout=cout+1;
    area.innerHTML=cout.toString();
    console.log('executing the task');
    };
