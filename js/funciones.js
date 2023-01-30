//Booleano para controlar si el menu fue desplegado
let menuStatus = false;

// mostrar/ocultar el menu
document.getElementById('Menu').onclick = function() {
    menuStatus = !menuStatus;
    if (menuStatus == false) {
        document.getElementById("botonera").style.width = "0%";
    } 
    else {
        document.getElementById("botonera").style.width = "100%";        
    }
}

//incrementar brillo cada vez que se posiciona el cursor sobre un boton
let botones = document.getElementsByTagName("button")
for (var i = 0; i < botones.length; i++) {
        //en nombre transformo los tags html en strings
        let nombre = botones[i].outerHTML.split('"')[1];
        botones[i].onmouseover = function() {
            document.getElementById(nombre).style.filter = "brightness(150%)";
        }
        botones[i].onmouseout = function() {
            document.getElementById(nombre).style.filter = "brightness(100%)";
        }
};

//los botones cambian el contenido del iframe para cargar las páginas
document.getElementById('inicio').onclick = function(){
    document.getElementById("principal").src = "inicio.html";
    document.getElementById("botonera").style.width = "0%";
};

document.getElementById('formacion').onclick = function(){
    document.getElementById("principal").src = "formacion.html";
    document.getElementById("botonera").style.width = "0%";
};

document.getElementById('habilidades').onclick = function(){
    document.getElementById("principal").src = "habilidades.html";
    document.getElementById("botonera").style.width = "0%";
};

document.getElementById('experiencia').onclick = function(){
    document.getElementById("principal").src = "experiencia.html";
    document.getElementById("botonera").style.width = "0%";
};

document.getElementById('idiomas').onclick = function(){
    document.getElementById("principal").src = "idiomas.html";
    document.getElementById("botonera").style.width = "0%";
};

document.getElementById('contacto').onclick = function(){
    document.getElementById("principal").src = "contacto.html";
    document.getElementById("botonera").style.width = "0%";
};

