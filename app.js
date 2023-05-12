var rut = document.getElementById('rut');
var appaterno = document.getElementById('appaterno');
var apmaterno = document.getElementById('apmaterno');
var nombre = document.getElementById('nombre');
var fecnac = document.getElementById('fecnac');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var email = document.getElementById('email');
var fono = document.getElementById('fono');
var profesion = document.getElementById('profesion');
var carta = document.getElementById('carta');

var error = document.getElementById('error');
error.style.color = 'red';


var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();

    var mensajesError = [];
    
    if(rut.value === null || rut.value === '' ){
        mensajesError.push('Ingrese su Rut');
    }    
    if(appaterno.value === null || appaterno.value === '' ){
        mensajesError.push('Ingrese su Apellido Paterno');
    }    
    if(apmaterno.value === null || apmaterno.value === '' ){
        mensajesError.push('Ingrese su Apellido Materno');
    }    
    if(nombre.value === null || nombre.value === '' ){
        mensajesError.push('Ingrese su Nombre');
    }    
    if(fecnac.value === null || fecnac.value === ''){
        mensajesError.push('Ingrese su Fecha de Nacimiento');
    }   
    if(edad.value === null || edad.value === '' ){
        mensajesError.push('Ingrese su Edad');
    }    
    if(genero.value === null || genero.value === '' ){
        mensajesError.push('Debe seleccionar un género');
    }    
    if(email.value === null || email.value === '' ){
        mensajesError.push('Ingrese su E-mail');
    }    
    if(fono.value === null || fono.value === '' ){
        mensajesError.push('Ingrese su Número de Contacto');
    }    
    if(profesion.value === null || profesion.value === '' ){
        mensajesError.push('Ingrese su Profesión');
    }    
    if(carta.value === null || carta.value === '' ){
        mensajesError.push('Es necesario agregar una carta de presentación');
    }

    error.innerHTML = mensajesError.join(', ');

    });