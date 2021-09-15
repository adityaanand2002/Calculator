let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
val="";
for(x of buttons){
    x.addEventListener('click',(e)=>
    {
        btn=e.target.innerText;
        if(btn=="CLEAR"){
            val="";
            screen.value="";
        }
        else if(btn=="="){
            screen.value=eval(val);
        }
        else{
            val+=btn;
            screen.value=val;
        }
    })
}
document.get