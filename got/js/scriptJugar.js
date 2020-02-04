const gotJSON = "./got.json";
 let array =[];
function init() {
    document.querySelector("button").addEventListener("click",comprobar);

    var peticion = new XMLHttpRequest();

    peticion.onreadystatechange = function() {

        if (peticion.readyState == 4 && peticion.status == 200) {
            
            respuesta = JSON.parse(peticion.responseText);
            array=respuesta;
            console.log(array);
            cargar(respuesta);
        }
    };
    peticion.open("GET", gotJSON);

    peticion.send();
}

function cargar(respuesta) {
    let div1 = document.getElementById("contenedorFotos");
    let cont = 0;

    respuesta.got.forEach( element => {

        let div = document.createElement("div");
        div.className = "col-xs-6 col-sm-3 contenedorJuego";
        div.innerHTML+= "<img class=\"img-thumbnail\" id=\"imagen"+cont+"\" src=\""+element.imagen+"\">"+
                        "<select class=\"form-control\">" +
                        "<option>Selecciona familia...</option>" +
                        "<option value=\"Casa Lannister\">Casa Lannister</option>" +
                        "<option value=\"Casa Targaryen\">Casa Targaryen</option>" +
                        "<option value=\"Casa Stark\">Casa Stark</option>" +
                        "<option value=\"Casa Bolton\">Casa Bolton</option>" +
                        "<option value=\"Casa Tyrell\">Casa Tyrell</option>" +
                        "<option value=\"Casa Baratheon\">Casa Baratheon</option>" +
                        "<option value=\"Casa Clegane\">Casa Clegane</option>" +
                        "</selec>";

        cont++;
        div1.appendChild(div)
    });

}


function comprobar(){

    console.log(array[1]);

};

window.onload =init;