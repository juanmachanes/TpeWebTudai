"use strict";
let inputTexto= document.getElementById("inputText");
let inputEstado = document.getElementById("inputAsunto");
let inputNombre = document.getElementById("inputNombre");
let inputEnviar = document.getElementById("enviar");
let envios = document.querySelector(".Envios");
let Preview = document.querySelector(".textoPreview");
let estadoPreview = document.querySelector(".textoEstadoPreview");
let Firma = document.querySelector(".firmaPreview")

inputTexto.addEventListener("keyup",preview);
inputEstado.addEventListener("keyup",preview);
inputNombre.addEventListener("keyup", preview);
inputEnviar.addEventListener("click",send);

function send(){
    let post = document.createElement("div");
    let asunto = document.createElement("p");
    asunto.className="textoEstadoPreview";
    asunto.innerHTML = inputEstado.value;
    let texto = document.createElement("p");
    texto.className="textoPreview";
    texto.innerHTML= inputTexto.value;
    let nombre = document.createElement("p");
    nombre.className="firmaPreview";
    nombre.innerHTML="atte "+inputNombre.value;
    post.className="Mensajes";
    post.appendChild(asunto);
    post.appendChild(texto);
    post.appendChild(nombre);
    envios.appendChild(post);
}

function preview(){
    Preview.innerHTML = inputTexto.value;
    estadoPreview.innerHTML = inputEstado.value;
    Firma.innerHTML = "Atte: "+inputNombre.value;

}