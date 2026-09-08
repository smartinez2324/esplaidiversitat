document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".navmenu ul");

  // Activar o desactivar el menú al hacer clic en la hamburguesa
  hamburger.addEventListener("click", function () {
      menu.classList.toggle("active");
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
          menu.classList.remove("active");
      }
  });

  // Evitar problemas al cambiar el tamaño de la pantalla
  window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
          menu.classList.remove("active");
      }
  });
});

// Qui Som


//



//formulario



//Formularidocument.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    const phonePattern = /^(?:\+34|0034|34)?[6789]\d{8}$/; // Validación de números de España

    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Por favor, completa todos los campos');
        return;
    }

    if (!phonePattern.test(phone)) {
        alert('Por favor, introduce un número de teléfono español válido.');
        return;
    }

    document.getElementById('response').innerText = 'Formulario enviado correctamente, ' + name + '!';

    document.getElementById('contact-form').reset();
