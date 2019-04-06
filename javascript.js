
var hambur = document.getElementsByClassName("icono");
var caja = document.getElementById("modalContainer");
var texto = document.getElementById("fuente");


hambur[0].onclick = function (){
    //console.log("hola");
    hambur[0].classList.add ("displayNone");
    caja.classList.remove("displayNone");
    texto.classList.remove("displayNone");
    
}


texto.onclick = function (){
   // console.log("hola");
 
    
    caja.classList.add("displayNone");
    hambur[0].classList.remove("displayNone");
}













