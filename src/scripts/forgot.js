function recuperar() {
  const email = document.getElementById("email").value;
  const emailGuardado = localStorage.getItem("email");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // validar formato
  if (!regexEmail.test(email)) {
    alert("Ingresa un correo válido");
    return;
  }

  // verificar si existe
  if (email !== emailGuardado) {
    alert("Este correo no está registrado");
    return;
  }

  // simulación de envío
  alert("Te enviamos un enlace para restablecer tu contraseña");
}

