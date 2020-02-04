function foco() {
    console.log(this);
    let error = document.getElementById("e"+this.id);

        if(this.value == ""){
            error.style.visibility = "visible";
        }else{
            error.style.visibility = "hidden";
        }

}

function comprobar() {

        let error = document.querySelectorAll(".error");
        let contador = 0;
        error.forEach(element =>{

            if(element.style.visibility = "hidden")contador++;

            
        })
        console.log(contador);
        if(contador == error.length){
            let div1 = document.getElementById("contenedorFichas");
            let div = document.createElement("div");
            let nombre = document.getElementById("nombre").value;
            let apellidos = document.getElementById("apellidos").value;
            let padres = document.getElementById("padres").value;
            let familia = document.getElementById("casa").value;
            let titulo = document.getElementById("titulo").value;
            div.innerHTML= "<div class=\"small cabecera\">Nombre</div> "+
                       "<div class=\"medium cabecera\">Apellidos</div>" +
                       "<div class=\"small dato\">"+nombre+"</div>" +
                       "<div class=\"medium dato\">"+apellidos+"</div>" +
                       "<div class=\"medium cabecera\">Padres</div>" +
                       "<div class=\"small cabecera\">Casa</div>" +
                       "<div class=\"medium dato\">"+padres+"</div>" +
                       "<div class=\"small dato\">"+familia +"</div>" +
                       "<div class=\"big cabecera\">Título</div>" +
                       "<div class=\"big dato\">"+ titulo+"</div>";

            div1.appendChild(div)
        }

}

function init(){
    document.querySelectorAll("input").forEach(element =>{

        console.log(element);
        
        element.addEventListener("blur", foco);
    })

    document.querySelector("button").addEventListener("click",comprobar);
}



window.addEventListener("load", init);