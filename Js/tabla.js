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
    var elementos = new Array();
    var Turnos = new Array();
    let tr;
    let th;
    for (const item of arregloTAbla) {

        tr = document.createElement("TR");
        th = document.createElement("TH");
        th.innerHTML = item.dia;
        tr.appendChild(th);
        Turnos[0]=item.primerTurno;
        Turnos[1]=item.segundoTurno;
        Turnos[2]=item.tercerTurno;
        Turnos[3]=item.cuartoTurno;
        Turnos[4]=item.quintoTurno;

        for(var i=0;i<5;i++)
        {
            elementos[i] = document.createElement("TD");
            elementos[i].innerHTML=Turnos[i];
            if (Turnos[i] =="Dario Gomez")
            {
                elementos[i].className="regional";
            }else
                if(Turnos[i] =="Rosio Serra")
                {
                    elementos[i].className="farandula";
                }else
                    if(Turnos[i] =="Carlos Sommi")
                    {
                        elementos[i].className="deportes"
    
                    }else
                        if(Turnos[i] =="Tomas Tompshon"){
                            elementos[i].className="musica"
                        }
        tr.appendChild(elementos[i]);
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

