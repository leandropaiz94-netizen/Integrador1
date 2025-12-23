document.addEventListener("DOMContentLoaded", () => {
  const formularioAlta = document.querySelector(".alta__form");
  if (!formularioAlta) return;

  const nombre = document.getElementById("nombre");
  const precio = document.getElementById("precio");
  const categoria = document.getElementById("categoria");
  const envioSinCargo = document.getElementById("envioSinCargo");

  if (nombre) {
    nombre.addEventListener("input", function () {
      this.value = this.value.replace(/\d+/g, "");
    });

    nombre.addEventListener("paste", function (e) {
      e.preventDefault();
      const texto = (e.clipboardData || window.clipboardData).getData("text") || "";
      this.value += texto.replace(/\d+/g, "");
    });
  }

  if (precio) {
    precio.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  }

  formularioAlta.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorNombre = nombre?.value.trim();
    const valorPrecio = precio?.value.trim();
    const valorCategoria = categoria?.value;

    if (!valorNombre || !valorPrecio || !valorCategoria) {
      alert("Completá correctamente todos los campos obligatorios.");
      return;
    }

    const producto = {
      nombre: valorNombre,
      precio: Number(valorPrecio),
      categoria: valorCategoria,
      envioSinCargo: envioSinCargo?.checked || false
    };

    console.log("Producto agregado:", producto);

    alert(`Producto "${valorNombre}" agregado correctamente ✅`);
    formularioAlta.reset();
  });
});
