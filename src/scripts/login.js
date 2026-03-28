//login de email y contraseña 
console.log ('Js conectado');
//verificar que estoy en la consola

//validación
function validar() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

if (!email.includes('@')) {
alert ('Correo invalido');
return;
}

if (password.length < 6) {
    alert ('La contraseña debe tener minimo 6 caracteres');
    return;
}



//Simulacion del usuario
const usuarioCorrecto = 'maria44@gmail.com';
const passwordCorrecto = '123456';

if (email !== usuarioCorrecto || password !== passwordCorrecto) {
  alert ('Usuario o contraseña incorrectos');
  return;
}
 
alert ('Login exitoso:)')

}
