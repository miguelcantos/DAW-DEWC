const gotJSON = "./got.json";

function init() {

    var peticion = new XMLHttpRequest();

    peticion.onreadystatechange = function() {

        if (peticion.readyState == 4 && peticion.status == 200) {
            
            respuesta = JSON.parse(peticion.responseText);
            cargar(respuesta);
        }
    };
    peticion.open("GET", gotJSON);
    peticion.send();
}

function cargar(respuesta) {
    let div1 = document.getElementById("contenedorFichas");
    respuesta.got.forEach( element => {
        
        let divIMG = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", element.imagen);
        divIMG.appendChild(img);
        div1.appendChild(divIMG);
        
        let div = document.createElement("div");
        div.classList.add("datos");
        div.innerHTML= "<div class=\"small cabecera\">Nombre</div> "+
                       "<div class=\"medium cabecera\">Apellidos</div>" +
                       "<div class=\"small dato\">"+element.nombre+"</div>" +
                       "<div class=\"medium dato\">"+element.apellidos+"</div>" +
                       "<div class=\"medium cabecera\">Padres</div>" +
                       "<div class=\"small cabecera\">Casa</div>" +
                       "<div class=\"medium dato\">"+element.padres+"</div>" +
                       "<div class=\"small dato\">"+element.familia +"</div>" +
                       "<div class=\"big cabecera\">Título</div>" +
                       "<div class=\"big dato\">"+ element.titulo+"</div>";

        div1.appendChild(div)

    });
}


window.addEventListener("load", init);