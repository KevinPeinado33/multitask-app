  
console.log ('prueba');

function registrar() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

//regex
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//validar email
if (!regexEmail.test(email)) {
alert ('Correo invalido');
return;
}

if (password.length <6) {
    alert ('La contraseña debe tener al menos 6 caracteres, incluyendo letras y números.');
    return;
}

alert ('Todo good:p');
window.location.href= 'login.html';

}
  

  