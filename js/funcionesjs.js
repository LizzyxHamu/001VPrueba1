/* validaciones */

function inicioSesion(){

    event.preventDefault();

    var usuario = document.getElementById("exampleInputEmail1").value;

    var password = document.getElementById("exampleInputPassword1").value;

    if(usuario == ''){
        alert("El email no puede ir vacio")
    }

}

