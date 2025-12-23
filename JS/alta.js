document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector(".alta__form");
  if (!formulario) return;

  const campos = {
    nombre: document.getElementById("nombre"),
    precio: document.getElementById("precio"),
    categoria: document.getElementById("categoria"),
    stock: document.getElementById("stock"),
    envioSinCargo: document.getElementById("envioSinCargo")
  };

  const soloTexto = valor => valor.replace(/\d+/g, "");
  const soloNumeros = valor => valor.replace(/\D+/g, "");

  campos.nombre.addEventListener("input", e => {
    e.target.value = soloTexto(e.target.value);
  });

  campos.nombre.addEventListener("paste", e => {
    e.preventDefault();
    const textoPegado = e.clipboardData.getData("text");
    campos.nombre.value += soloTexto(textoPegado);
  });

  [campos.precio, campos.stock].forEach(campo => {
    campo.addEventListener("input", e => {
      e.target.value = soloNumeros(e.target.value);
    });
  });

  formulario.addEventListener("submit", e => {
    e.preventDefault();

    const producto = {
      nombre: campos.nombre.value.trim(),
      precio: Number(campos.precio.value),
      categoria: campos.categoria.value,
      stock: Number(campos.stock.value) || 0,
      envioSinCargo: campos.envioSinCargo.checked
    };

    if (!producto.nombre || !producto.precio || !producto.categoria) {
      alert("Completá correctamente todos los campos obligatorios.");
      return;
    }

    if (producto.stock < 0) {
      alert("El stock no puede ser un número negativo.");
      return;
    }

    console.log("Producto agregado:", producto);
    alert(`Producto "${producto.nombre}" agregado correctamente ✅`);
    formulario.reset();
  });
});
