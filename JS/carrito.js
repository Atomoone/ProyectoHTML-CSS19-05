let carrito = [];

// === Cargar carrito desde localStorage al iniciar ===
window.addEventListener('DOMContentLoaded', () => {
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
  }
});

// === Agregar producto al carrito ===
function agregarAlCarrito(nombre, precio) {
  const productoExistente = carrito.find(p => p.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  guardarCarrito();
  actualizarCarrito();
}

// === Eliminar producto del carrito con confirmación ===
function eliminarDelCarrito(nombre) {
  if (confirm(`¿Deseas eliminar "${nombre}" del carrito?`)) {
    carrito = carrito.filter(p => p.nombre !== nombre);
    guardarCarrito();
    actualizarCarrito();
  }
}

// === Actualizar visual del carrito y precios ===
function actualizarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const subtotalEl = document.getElementById('subtotal');
  const ivaEl = document.getElementById('iva');
  const totalEl = document.getElementById('total');
  const cantidadEl = document.getElementById('cantidad-items');

  lista.innerHTML = '';
  let subtotal = 0;
  let cantidadTotal = 0;

  carrito.forEach(p => {
    const item = document.createElement('li');
    item.innerHTML = `
      ${p.nombre} x${p.cantidad} - $${(p.precio * p.cantidad).toLocaleString()}
      <button onclick="eliminarDelCarrito('${p.nombre}')">Eliminar</button>
    `;
    lista.appendChild(item);

    subtotal += p.precio * p.cantidad;
    cantidadTotal += p.cantidad;
  });

  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  subtotalEl.textContent = `Subtotal: $${subtotal.toLocaleString()}`;
  ivaEl.textContent = `IVA (19%): $${iva.toLocaleString()}`;
  totalEl.textContent = `Total: $${total.toLocaleString()}`;
  if (cantidadEl) {
    cantidadEl.textContent = `Productos en carrito: ${cantidadTotal}`;
  }
}

// === Guardar carrito en localStorage ===
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// === Finalizar compra y limpiar carrito ===
function finalizarCompra() {
  if (carrito.length === 0) {
    alert('El carrito está vacío.');
    return;
  }

  alert('Redirigiendo a Webpay... (simulado)');
  carrito = [];
  guardarCarrito();
  actualizarCarrito();
}








