var art1=document.querySelector("#prod1_jc");
var art2=document.querySelector('#prod2_jc');


art2.onmouseout=function(){
    art2.innerHTML="<div class='prod2wz_jc'>详解</div>";
    art2.className="prod2_jc ";

}
art1.onmouseout=function(){
    art1.innerHTML="<div class='prod1wz_jc'>简介</div>";
    art1.className="prod1_jc ";
}
var lc=localStorage;
var b=lc.getItem('b');
var b=JSON.parse(b);
var id=document.querySelector(".id_jc");
id.innerHTML=b.username;