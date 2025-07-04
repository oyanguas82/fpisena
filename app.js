// Lista de detalles
const detalles = [
  { id: 1, nombre: 'Detalle 1' },
  { id: 2, nombre: 'Detalle 2' },
  { id: 3, nombre: 'Detalle 3' },
  { id: 4, nombre: 'Detalle 4' },
  { id: 5, nombre: 'Detalle 5' },
  { id: 6, nombre: 'Detalle 6' },
  { id: 7, nombre: 'Detalle 7' },
  { id: 8, nombre: 'Detalle 8' }
];

const catalog = document.getElementById('catalog');
const cartList = document.getElementById('cart-items');

function createCard(detalle) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${detalle.nombre}</h3>`;

  // Las primeras 4 opciones muestran un menú
  if (detalle.id <= 4) {
    const select = document.createElement('select');
    select.innerHTML = `
      <option value="Jugo">Jugo</option>
      <option value="Chocolate">Chocolate</option>
      <option value="Ambos">Jugo y Chocolate</option>
    `;
    card.appendChild(select);

    if (detalle.id === 1) {
      const tempSelect = document.createElement('select');
      tempSelect.innerHTML = `
        <option value="Fría">Fría</option>
        <option value="Caliente">Caliente</option>
      `;
      card.appendChild(tempSelect);

      const azucar = document.createElement('label');
      azucar.innerHTML = '<input type="checkbox" value="Baja en azúcar"> Baja en azúcar';
      card.appendChild(azucar);
    }
  }

  const button = document.createElement('button');
  button.textContent = 'Agregar';
  button.onclick = () => addToCart(detalle.nombre);
  card.appendChild(button);
  return card;
}

function addToCart(nombre) {
  const li = document.createElement('li');
  li.textContent = nombre;
  cartList.appendChild(li);
}

function loadCatalog() {
  detalles.forEach(detalle => {
    catalog.appendChild(createCard(detalle));
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

loadCatalog();
