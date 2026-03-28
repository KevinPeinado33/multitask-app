//login of email and password 
console.log ('Js conect');
//check console

//valid
function validate() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

if (!email.includes('@')) {
alert ('Invalide email');
return;
}

if (password.length < 6) {
    alert ('The passowrd most be at least 6 characters long');
    return;
}



//Simulation of the username
const usuarioCorrecto = 'maria44@gmail.com';
const passwordCorrecto = '123456';

if (email !== usuarioCorrecto || password !== passwordCorrecto) {
  alert ('Incorrect username or password');
  return;
}
 
alert ('Login:)')

}
