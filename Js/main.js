"use strict";
let numRandom1 = Math.floor((Math.random()*10) + 1);
let numRandom2 = Math.floor((Math.random()*10) + 1);

let num1= document.getElementById("num1");
let num2= document.getElementById("num2");

let inputResultadoCapcha= document.getElementById("resultado");
let inputTexto= document.getElementById("inputText");
let inputEstado = document.getElementById("inputAsunto");
let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputEnviar = document.getElementById("enviar");

let envios = document.querySelector(".envios");
let Preview = document.querySelector(".textoPreview");
let estadoPreview = document.querySelector(".textoEstadoPreview");
let Firma = document.querySelector(".firmaPreview")

inputTexto.addEventListener("keyup",preview);
inputEstado.addEventListener("keyup",preview);
inputNombre.addEventListener("keyup", preview);
inputApellido.addEventListener("keyup",preview);
inputEnviar.addEventListener("click",validarCaptcha);

cambiarNumeros();


function cambiarNumeros(){
    num1.innerHTML=numRandom1;
    num2.innerHTML=numRandom2;
}

function send(){
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

function sendError(){
    let post = document.createElement("div");
    let texto = document.createElement("p");
    texto.innerHTML= "No se pudo mandar el mensaje,error en la resolucion del captcha";
    texto.className="textoPreview";
    post.className="mensajeNoEnviado";
    post.appendChild(texto);
    envios.appendChild(post);
}

function preview(){
    Preview.innerHTML = inputTexto.value;
    estadoPreview.innerHTML = inputEstado.value;
    Firma.innerHTML = "Atte: "+inputApellido.value+" "+inputNombre.value;

}

function validarCaptcha(){
    if (inputResultadoCapcha.value==(numRandom1+numRandom2)){
        send();
        
    }else{
        sendError();

    }
    numRandom1 = Math.floor((Math.random()*10) + 1);
    numRandom2 = Math.floor((Math.random()*10) + 1);
    cambiarNumeros();
}