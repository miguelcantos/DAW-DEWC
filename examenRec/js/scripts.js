 const urlEmpleado = "./empleados.json";
 const urlDatos = "./datosPersonales.json";

 var listaEmpleados = new Array;
 var empleados = new Array
 const boton = document.getElementById("despedir");


//funcion cuando cargo la pagina, me descargo los 2 json y los meto en 2 arrays
function init(){

    console.log("miguel");
    let boton = document.getElementById("despedir");
    boton.disabled = true;
    const fetchPromesa = fetch(urlEmpleado);
    let div = document.getElementById("main").querySelectorAll("div");
    let seleccionador = document.createElement("select");
    seleccionador.id = "seleccion";
    div[0].appendChild(seleccionador);
    

    //descargo un JSON
	fetchPromesa.then(response => {
		return response.json();
	}).then(respuesta =>{
        
        console.log(respuesta);

        let Seccion = document.getElementById("seleccion");
        var option = document.createElement("option");
	    option.text = "Selecciona un empleado";
        Seccion.add(option);

        respuesta.empleados.forEach(element => {
            console.log(element);
            /* console.log(element.nombre); */
            
            var option = document.createElement("option");
            option.text = element.apellido+ " " + element.nombre;
            option.setAttribute("value",element.idEmpleado);
            Seccion.add(option);


        });
    });

    //creo 2 eventos
    document.getElementById("despedir").addEventListener("click",alerta);
    document.getElementById("seleccion").addEventListener("change",buscar);
    
    //descargo un JSON
    const fetchPromesa2 = fetch(urlDatos);
    fetchPromesa2.then(response => {
		return response.json();
	}).then(respuesta =>{
        
        console.log(respuesta.empleados[0].idEmpleado);

        respuesta.empleados.forEach(element => {
            console.log(element);
            empleados.push(element);

        });
    });
}

//funcion buscar sirve para llenar o vaciar los campos a traves del desplegable
function buscar(){
    console.log(empleados[0]);
    console.log("cambio");
    let seleccion = document.getElementById("seleccion").value;
    console.log(seleccion);
    let td= document.querySelectorAll("td");
    console.log(td);
    empleados.forEach(element=>{
    let boton = document.getElementById("despedir");

        if(element.idEmpleado == seleccion ){
            
            console.log(element.nombre);
            td[0].innerText = element.idEmpleado;
            td[2].innerText = element.nombre;
            td[4].innerText = element.apellido1 + " " + element.apellido2;
            td[6].innerText = element.direccion;
            td[8].innerText = element.email;
            td[10].innerText = element.cargo;
            boton.disabled = false;
            
        } else if(seleccion == "Selecciona un empleado"){
            for (let index = 0; index < td.length; index+=2) {
                td[index].innerText = "";
                
            }
            boton.disabled = true;

        } 

        
    
    });
}

//funcion alert la utilizo al clicar elegir para borra un empleado
function alerta(){
    
    let td = document.querySelectorAll("td");
    let nombre = td[2].innerText + " " + td[4].innerText ;
    var mensaje = confirm("¿Seguro que quieres despedir a "+ nombre);
    let boton = document.getElementById("despedir");
        //Detectamos si el usuario acepto el mensaje
        if (mensaje) {
            alert("¡Eliminado!");
            var sel = document.getElementById("seleccion");
            sel.remove(sel.selectedIndex);
            for (let index = 0; index < td.length; index+=2) {
                td[index].innerText = ""; 
            }
            boton.disabled = true;
        }else {
            alert("¡No eliminado!");
        }
    console.log(nombre);
}

window.onload = init;