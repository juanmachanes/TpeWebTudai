"use strict";
let inputTexto= document.getElementById("inputText");
let inputEstado = document.getElementById("inputAsunto");
let inputNombre = document.getElementById("inputNombre");
let Preview = document.querySelector(".textoPreview");
let estadoPreview = document.querySelector(".textoEstadoPreview");
let Firma = document.querySelector(".firmaPreview")

inputTexto.addEventListener("keyup",preview);
inputEstado.addEventListener("keyup",preview);
inputNombre.addEventListener("keyup", preview);


function preview(){
    Preview.innerHTML = inputTexto.value;
    estadoPreview.innerHTML = inputEstado.value;
    Firma.innerHTML = "Atte: "+inputNombre.value;

}