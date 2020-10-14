

alert("Bienvenidos a mi sitio")



let confimacion = confirm("Esta seguro de que desea continuar?");
termina = document.querySelector (".siguiente");
if (confirmacion = false) {
    termina.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increible."
}

else if (confirmacion = true) {
    termina.innerHTML = "Que alegria que quieras seguir tu visita por este matavilloso sitio."
};


nombre = prompt("Ingrese su nombre de usuario");
console.log(nombre);
saludo = document.querySelector(".ingresado");
saludo.innerHTML = "Bienvenido " + nombre;



edad = prompt("Ingrese su edad porfavor");
if (edad>= 18) {
    acceso = alert("Acceso Permitido"); oscuro = confirm ("Desea utilizar el modo oscuro?"); 
    cuerpo = document.querySelector (".mode");   
}
else if (edad<18) {
    acceso = alert ("Acceso denegado");
    termina.style.color = "white"; 
    saludo.style.color = "white";
}
if (oscuro == true) {
    cuerpo.style.backgroundColor = "dimgray";
    cuerpo.style.color = "white";    
}


DiaDeSemana = ("Domingo")
if (DiaDeSemana = "Domingo") {
    alert("Hoy es dia de descanso!");
}
    
