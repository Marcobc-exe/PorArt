const validarFormulario = () => {
    elemento = document.forms["form"]["termsCond"].checked;
    if (elemento == true){
        return false;
    } else {
        document.getElementById("info").innerHTML = "¡Debe aceptar los terminos y condiciones de contrato!";
        return false;
    }
}

let pass1 = document.getElementById("passwd").value;
let pass2 = document.getElementById("passwd2").value;

const ValidarRegister = (pass1, pass2) => {

    if (pass1 != pass2) {
        alert("Las contraseñas deben coincidir!");
        return false;
    } else {
        alert("Todo esta correcto!");
        return true;
    }
}
