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


// QUÈ FEM

(function () {
    "use strict";

    const vertical_slider = {
        slider_class: ".slider",

        show_slide: function (slide_id, context_item) {
            const slide_container = context_item.closest(this.slider_class).querySelector(".slides");

            if (slide_container) {
                const target_slide = document.querySelector(slide_id);
                if (target_slide) {
                    // Prevenir el comportamiento por defecto del enlace
                    event.preventDefault();

                    // Desplazar suavemente hacia el slide
                    slide_container.scrollTo({
                        top: target_slide.offsetTop,
                        behavior: "smooth"
                    });

                    // Eliminar la clase 'active' del item anterior
                    const active_context_item = context_item.closest(".slide_navigation").querySelector(".active");
                    if (active_context_item) {
                        active_context_item.classList.remove("active");
                    }

                    // Añadir la clase 'active' al item clicado
                    context_item.classList.add("active");
                }
            }
        },

        init_slider: function (slider) {
            const navigation_items = slider.querySelectorAll(".slide_navigation a");

            navigation_items.forEach((item) => {
                item.addEventListener("click", function (e) {
                    e.preventDefault();  // Prevenir el comportamiento predeterminado
                    vertical_slider.show_slide(this.getAttribute("href"), this);
                });
            });
        },

        init: function () {
            document.querySelectorAll(this.slider_class).forEach((slider) => this.init_slider(slider));
        }
    };

    vertical_slider.init();
})();


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
