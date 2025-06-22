/*
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  const producto = { nombre, precio };
  carrito.push(producto);
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const total = document.getElementById('total');
  lista.innerHTML = '';
  let suma = 0;

  carrito.forEach((producto, index) => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio.toLocaleString()}`;
    const btn = document.createElement('button');
    btn.textContent = 'Quitar';
    btn.style.marginLeft = '10px';
    btn.onclick = () => eliminarDelCarrito(index);
    li.appendChild(btn);
    lista.appendChild(li);
    suma += producto.precio;
  });

  total.textContent = `Total: $${suma.toLocaleString()}`;
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  // Simulación de redirección a Webpay
  alert("Redirigiendo a Webpay... (simulado)");
}

nuevo*/

let carrito = [];

function agregarAlCarrito(nombre, precio) {
  const productoExistente = carrito.find(p => p.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  actualizarCarrito();
}

function eliminarDelCarrito(nombre) {
  carrito = carrito.filter(p => p.nombre !== nombre);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito-lista');
  lista.innerHTML = '';

  let subtotal = 0;

  carrito.forEach(p => {
    const item = document.createElement('li');
    item.innerHTML = `
      ${p.nombre} x${p.cantidad} - $${(p.precio * p.cantidad).toLocaleString()}
      <button onclick="eliminarDelCarrito('${p.nombre}')">Eliminar</button>
    `;
    lista.appendChild(item);
    subtotal += p.precio * p.cantidad;
  });

  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  document.getElementById('subtotal').textContent = `Subtotal: $${subtotal.toLocaleString()}`;
  document.getElementById('iva').textContent = `IVA (19%): $${iva.toLocaleString()}`;
  document.getElementById('total').textContent = `Total: $${total.toLocaleString()}`;
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert('El carrito está vacío.');
    return;
  }
  alert('Redirigiendo a Webpay... (simulado)');
  carrito = [];
  actualizarCarrito();
}

