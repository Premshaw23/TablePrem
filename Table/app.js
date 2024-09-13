let container=document.querySelectorAll(".container")
let title=document.querySelector(".title")
let tabhead1=document.querySelector(".table-head1")
let tabhead2=document.querySelector(".table-head2")
let tabMain=document.querySelector(".table-main")
const newtabMain=document.getElementById("newtabmain")
let table=document.querySelector(".table")
let head1=document.querySelector("#head1")
let head2=document.querySelector("#head2")
const tablebox=document.getElementById("table-box")
let btn=document.getElementById("btn")
let newbtn=document.getElementsByClassName("newbtn")
const active=document.getElementById("newBtn1")
// console.log(newtabMain)
function loop(){
    visible()
    tablebox.remove()
    btn.remove()
    for(i=1; i<=head2.value; i++){
     table.innerHTML+= head1.value + "*" +i+ "=" +  i*head1.value + "<br><br>";  }
}
function visible(){
    newtabMain.removeAttribute("id")
    active.removeAttribute("id")
   active.addEventListener("click",reset); }
function reset(){
    location.reload();
   ;
     }
function check(){
    if(head1.value!="" && head2.value!="" && head1.value>0 && head2.value>0 ){
        loop()
    }else{
        alert("wrong input")
        reset(); }
}
btn.addEventListener("click",check)
