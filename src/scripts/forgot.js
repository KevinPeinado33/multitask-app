function recover() {
  const email = document.getElementById("email").value;
  const emailSaved = localStorage.getItem("email");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // valid format
  if (!regexEmail.test(email)) {
    alert("Enter a valid email");
    return;
  }

  // Check if it exists
  if (email !== emailSaved) {
    alert("This email is not registered");
    return;
  }

  // Simulate sending
  alert("We sent you an email to reset your password");
}

