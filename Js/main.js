"use strict";
let inputTexto= document.getElementById("inputText");
let inputEstado = document.getElementById("inputAsunto");
let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputEnviar = document.getElementById("enviar");
let envios = document.querySelector(".Envios");
let Preview = document.querySelector(".textoPreview");
let estadoPreview = document.querySelector(".textoEstadoPreview");
let Firma = document.querySelector(".firmaPreview")

inputTexto.addEventListener("keyup",preview);
inputEstado.addEventListener("keyup",preview);
inputNombre.addEventListener("keyup", preview);
inputApellido.addEventListener("keyup",preview);
inputEnviar.addEventListener("click",send);

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
    post.className="Mensajes";
    post.appendChild(asunto);
    post.appendChild(texto);
    post.appendChild(nombre);
    envios.appendChild(post);
}

function preview(){
    Preview.innerHTML = inputTexto.value;
    estadoPreview.innerHTML = inputEstado.value;
    Firma.innerHTML = "Atte: "+inputApellido.value+" "+inputNombre.value;

}