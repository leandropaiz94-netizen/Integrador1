document.addEventListener('DOMContentLoaded', () => {
  const formularioContacto = document.querySelector('.contacto__form');
  if (!formularioContacto) return;

  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const comentarios = document.getElementById('comentarios');
  const edad = document.getElementById('edad');

  if (nombre) {
    nombre.addEventListener('input', function () {
      this.value = this.value.replace(/\d+/g, '');
    });

    nombre.addEventListener('paste', function (e) {
      e.preventDefault();
      const texto = (e.clipboardData || window.clipboardData).getData('text') || '';
      this.value += texto.replace(/\d+/g, '');
    });
  }

  if (edad) {
    edad.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  }

  formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault();

    const valorNombre = nombre?.value.trim();
    const valorEmail = email?.value.trim();
    const valorComentarios = comentarios?.value.trim();
    const valorEdad = edad?.value.trim();

    if (!valorNombre || !valorEmail || !valorComentarios || !valorEdad) {
      alert('Por favor completá todos los campos correctamente.');
      return;
    }

    alert(`Gracias ${valorNombre}, recibimos tu mensaje correctamente.`);
    formularioContacto.reset();
  });
});
