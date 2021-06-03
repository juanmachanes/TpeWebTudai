"use strict";

let bodyTable = document.querySelector(".bodyTable");
let enviar = document.getElementById("inputEnviar");
let enviarX3 = document.getElementById("inputEnviarX3");
let borrar = document.getElementById("borrar");
let formulario = document.querySelector(".formulario");
var nodeList = formulario.childNodes;

let arregloTAbla=[
    {
        dia : "Domingo",
        primerTurno:"-",
        segundoTurno:"-",
        tercerTurno:"-",
        cuartoTurno:"-",
        quintoTurno:"-",
        
    }

];

mostrar();
function mostrar(){
    
    bodyTable.innerHTML=" ";
    let elemento;
    let turnos = new Array();
    let tr;
    let th;
    for (const item of arregloTAbla) {

        tr = document.createElement("TR");
        th = document.createElement("TH");
        th.innerHTML = item.dia;
        tr.appendChild(th);
        turnos[0]=item.primerTurno;
        turnos[1]=item.segundoTurno;
        turnos[2]=item.tercerTurno;
        turnos[3]=item.cuartoTurno;
        turnos[4]=item.quintoTurno;

        for(var i=0;i<5;i++)
        {
            elemento=document.createElement("TD");
            elemento.innerHTML=turnos[i];
            if (turnos[i] =="Dario Gomez")
            {
                elemento.className="regional";
            }else
                if(turnos[i] =="Rosio Serra")
                {
                    elemento.className="farandula";
                }else
                    if(turnos[i] =="Carlos Sommi")
                    {
                        elemento.className="deportes"
    
                    }else
                        if(turnos[i] =="Tomas Tompshon"){
                            elemento.className="musica"
                        }
        tr.appendChild(elemento);
        }        
    bodyTable.appendChild(tr);
    }
}

function vaciar(){
    while(arregloTAbla.length > 0)
        arregloTAbla.pop();
 mostrar();
}

function insertar(){

    let horarioDiario =
    {
        dia : nodeList[1].options[nodeList[1].selectedIndex].value,
        primerTurno:nodeList[3].options[nodeList[3].selectedIndex].value,
        segundoTurno:nodeList[5].options[nodeList[5].selectedIndex].value,
        tercerTurno:nodeList[7].options[nodeList[7].selectedIndex].value,
        cuartoTurno:nodeList[9].options[nodeList[9].selectedIndex].value,
        quintoTurno:nodeList[11].options[nodeList[11].selectedIndex].value,
    }
    arregloTAbla.push(horarioDiario);
    mostrar();
}

function insertarX3(){
    for (var i =0;i<3;i++){
        insertar();
    }
    
    mostrar();
}
borrar.addEventListener("click",vaciar);
enviar.addEventListener("click",insertar);
enviarX3.addEventListener("click",insertarX3);

