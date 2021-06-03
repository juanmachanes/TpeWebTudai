"use strict";
//NUMEROS RANDOM
let numRandom1= Math.floor((Math.random()*10) + 1);
let numRandom2=Math.floor((Math.random()*10) + 1);

//ELEMENTOS HTML
let num1= document.getElementById("num1");
let num2= document.getElementById("num2");
let inputResultadoCapcha= document.getElementById("resultado");
let inputTexto= document.getElementById("inputText");
let inputEstado = document.getElementById("inputAsunto");
let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputEnviar = document.getElementById("enviar");

//CLASES
let envios = document.querySelector(".envios");
let previewPost = document.querySelector(".textoPreview");
let estadoPreview = document.querySelector(".textoEstadoPreview");
let firma = document.querySelector(".firmaPreview");
let formulario = document.querySelector(".formulario");

//SE LE ASIGNA EVENTOS A LOS INPUT
inputTexto.addEventListener("keyup",preview);
inputEstado.addEventListener("keyup",preview);
inputNombre.addEventListener("keyup", preview);
inputApellido.addEventListener("keyup",preview);
inputEnviar.addEventListener("click",validarCaptcha);

//INICIALIZACION DE NUMEROS
cambiarNumeros();

//SE LE DA VALOS A #NUM1 Y #NUM2 
function cambiarNumeros(){
    num1.innerHTML=numRandom1;
    num2.innerHTML=numRandom2;
}
//CREA EL EL DIV DEL POST CON TODOS SUS ATRIBUTOS
function envio(){
    let post = document.createElement("div");
    let asunto = document.createElement("p");
    let texto = document.createElement("p");
    let nombre = document.createElement("p");
    texto.innerHTML= inputTexto.value;
    asunto.innerHTML = inputEstado.value;
    nombre.innerHTML="Atte: "+inputApellido.value+" "+inputNombre.value;
    asunto.className="textoEstadoPreview";
    texto.className="textoPreview";
    nombre.className="firmaPreview";
    post.className="mensajeEnviado";
    post.appendChild(asunto);
    post.appendChild(texto);
    post.appendChild(nombre);
    envios.appendChild(post);
}
//CREA EL DIV DEL POST CON UN ERROR
function envioError(){
    let post = document.createElement("div");
    let texto = document.createElement("p");
    texto.innerHTML= "No se pudo mandar el mensaje,error en la resolucion del captcha";
    texto.className="textoPreview";
    post.className="mensajeNoEnviado";
    post.appendChild(texto);
    envios.appendChild(post);
}
//MUESTRA PREVIEW
function preview(){
    previewPost.innerHTML = inputTexto.value;
    estadoPreview.innerHTML = inputEstado.value;
    firma.innerHTML = "Atte: "+inputApellido.value+" "+inputNombre.value;

}
//VALIDACION CAPTCHA. AUNQUE SEA CORRECTO O NO CAMBIA NUMEROS PARA PODER HACER UN REINTENTO O MANDAR OTRO MENSAJE 
function validarCaptcha(){
    if (inputResultadoCapcha.value==(numRandom1+numRandom2)){
        envio();
        
    }else{
        
        envioError();

    }
    numRandom1 = Math.floor((Math.random()*10) + 1);
    numRandom2 = Math.floor((Math.random()*10) + 1);
    cambiarNumeros();
    formulario.reset();
    previewPost.innerHTML=" ";

}