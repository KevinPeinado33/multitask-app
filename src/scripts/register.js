  
console.log ('test');

function register() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

//regex
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//valid email
if (!regexEmail.test(email)) {
alert ('invalide email');
return;
}

if (password.length <6) {
    alert (' The password must be at least 6 characters long, including text and numbers');
    return;
}

alert ('all good:p');
window.location.href= 'login.html';

}
  

  