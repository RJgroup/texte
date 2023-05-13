let button1= document.getElementById("button1")
let button2= document.getElementById("button2")
let button3= document.getElementById("button3")
let s= document.getElementById('s')
button1.addEventListener("click", funçao1)
button2.addEventListener("click", funçao2)
button3.addEventListener("click", funçao3)
let item1= document.getElementById("s")
let item2= document.getElementById("ss")
let item3= document.getElementById("sss")


function funçao1(){
    s.style.marginLeft='0'
    item1.style.animationName='abrir'
    item1.style.animationDelay='2s'
}
function funçao2(){
    s.style.marginLeft='-550px'
    item2.style.animationName='abrir'
    item2.style.animationDelay='2s'
}
function funçao3(){

    s.style.marginLeft='-1080px'
    item3.style.animationName='abrir'
    item3.style.animationDelay='2s'
}
