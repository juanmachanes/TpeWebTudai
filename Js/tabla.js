"use strict";
let horario8A10= document.getElementById("horario8A10");
let horario10A12= document.getElementById("horario10A12");
let horario12A14= document.getElementById("horario12A14");
let horario14A16= document.getElementById("horario14A16");
let horario16A18= document.getElementById("horario16A18");
let diaInput = document.getElementById("dia");
let bodyTable = document.querySelector(".bodyTable");
let enviar = document.getElementById("inputEnviar");
let enviarX3 = document.getElementById("inputEnviarX3");
let arregloTAbla=[];

function insertar(){
    let horarioDiario =
    {
        dia : diaInput.value,
        primerTurno:horario8A10.value,
        segundoTurno:horario10A12.value,
        tercerTurno:horario12A14.value,
        cuartoTurno:horario14A16.value,
        quintoTurno:horario16A18.value,
        
    }
    arregloTAbla.push(horarioDiario);
    
}

function mostrar(){
    insertar();
    bodyTable.innerHTML=" "
    for (const item of arregloTAbla) {
        bodyTable.innerHTML+="<tr><th>"+item.dia+"</th><td>"+item.primerTurno+"</td><td>"+item.segundoTurno+"</td><td>"+item.tercerTurno+"</td><td>"+item.cuartoTurno+"</td><td>"+item.quintoTurno+"</td></tr>"
    }
}


function insertarX3(){
    for (var i =0;i<3;i++){
        mostrar();
    }
}

enviar.addEventListener("click",mostrar);
enviarX3.addEventListener("click",insertarX3);

