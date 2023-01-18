function validateEmail() {
    
    var isValid = false
    var email = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!regex.test(email)) {
      alert("invalid email");
      document.getElementById("email").focus();
      return isValid;
    }else
    {
        isValid = true
    }
    return isValid;
}

function enviarDatos() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  window.location.href = "ResponseForm.html?nombre=" + nombre + "&apellido=" + apellido + "&email=" + email;
}

function callFunctions() {
    if (validateEmail())
    {
        enviarDatos();
    };
}
  