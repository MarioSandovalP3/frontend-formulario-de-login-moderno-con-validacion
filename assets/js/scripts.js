document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const emailGroup = emailInput.parentElement;
  const passwordGroup = passwordInput.parentElement.parentElement; // Cambiado por la nueva estructura

  // Función para mostrar/ocultar contraseña
  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("show-password");

    // Efecto de animación
    this.style.transform = "translateY(-50%) scale(1.2)";
    setTimeout(() => {
      this.style.transform = "translateY(-50%) scale(1)";
    }, 200);
  });

  // Validar formato de email
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Mostrar error
  function showError(inputGroup, message) {
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
    inputGroup.querySelector(".error-message").textContent = message;
  }

  // Mostrar éxito
  function showSuccess(inputGroup) {
    inputGroup.classList.remove("error");
    inputGroup.classList.add("success");
  }

  // Validar campos
  function validateInputs() {
    let isValid = true;

    // Validar email
    if (emailInput.value.trim() === "") {
      showError(emailGroup, "El correo electrónico es requerido");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailGroup, "Por favor ingresa un correo válido");
      isValid = false;
    } else {
      showSuccess(emailGroup);
    }

    // Validar contraseña
    if (passwordInput.value.trim() === "") {
      showError(passwordGroup, "La contraseña es requerida");
      isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
      showError(
        passwordGroup,
        "La contraseña debe tener al menos 6 caracteres"
      );
      isValid = false;
    } else {
      showSuccess(passwordGroup);
    }

    return isValid;
  }

  // Evento submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateInputs()) {
      // Simular envío del formulario
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.textContent = "Iniciando sesión...";
      submitButton.disabled = true;

      setTimeout(() => {
        alert("Inicio de sesión exitoso (simulado)");
        submitButton.textContent = "Iniciar sesión";
        submitButton.disabled = false;
        form.reset();
        emailGroup.classList.remove("success");
        passwordGroup.classList.remove("success");
      }, 1500);
    }
  });

  // Validación en tiempo real
  emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() === "") {
      emailGroup.classList.remove("error");
      emailGroup.classList.remove("success");
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailGroup, "Por favor ingresa un correo válido");
    } else {
      showSuccess(emailGroup);
    }
  });

  passwordInput.addEventListener("input", function () {
    if (passwordInput.value.trim() === "") {
      passwordGroup.classList.remove("error");
      passwordGroup.classList.remove("success");
    } else if (passwordInput.value.trim().length < 6) {
      showError(
        passwordGroup,
        "La contraseña debe tener al menos 6 caracteres"
      );
    } else {
      showSuccess(passwordGroup);
    }
  });
});
