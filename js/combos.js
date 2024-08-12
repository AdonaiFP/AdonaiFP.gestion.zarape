/**********************************************************/
/* Axolotl Technologies */
/* 11/08/2024 */
/* Rey Adonaí Floreano Parra */
/* Gestión de Combos y Menús de Alimentos y Bebidas */
/**********************************************************/

/**********************************************************/
/* Constantes de Alimentos y Bebidas */
/**********************************************************/
const ALIMENTOS = [
  { id: '1', nombre: 'Tacos de carne asada', precio: 3.99 },
  { id: '2', nombre: 'Burrito de pollo', precio: 5.49 },
  { id: '3', nombre: 'Enchiladas de queso', precio: 4.25 },
  { id: '4', nombre: 'Quesadilla de carne al pastor', precio: 3.75 },
  { id: '5', nombre: 'Fajitas mixtas (pollo y res)', precio: 6.99 },
  { id: '6', nombre: 'Tostadas de tinga de pollo', precio: 2.99 },
  { id: '7', nombre: 'Tamal de rajas con queso', precio: 1.99 },
  { id: '8', nombre: 'Sopes de chorizo', precio: 3.49 },
  { id: '9', nombre: 'Pozole rojo', precio: 7.25 },
  { id: '10', nombre: 'Flautas de pollo', precio: 4.99 }
];

const BEBIDAS = [
  { id: '1', nombre: 'Agua de horchata', precio: 1.99 },
  { id: '2', nombre: 'Agua de jamaica', precio: 1.75 },
  { id: '3', nombre: 'Agua de tamarindo', precio: 1.85 },
  { id: '4', nombre: 'Refresco de cola', precio: 2.25 },
  { id: '5', nombre: 'Agua de limón con chía', precio: 2.15 },
  { id: '6', nombre: 'Refresco de manzana', precio: 2.49 },
  { id: '7', nombre: 'Champurrado', precio: 2.99 },
  { id: '8', nombre: 'Agua de sandía', precio: 1.95 },
  { id: '9', nombre: 'Agua de piña', precio: 2.05 },
  { id: '10', nombre: 'Agua de melón', precio: 2.10 }
];

/**********************************************************/
/* Configuración de Combos a partir de una Cadena JSON */
/**********************************************************/
const TEXT_COMBOS = '{"combos" : [ ' +
  '{"nombre" : "Combo Tacos Clásicos", "descripcion" : "Tres tacos clásicos con una refrescante bebida.", "alimento" : "Tacos de carne asada", "cantA" : "3", "bebida" : "Agua de horchata", "cantB" : "1", "precio" : "12.56", "estatus" : "Activo"}, ' +
  '{"nombre" : "Combo Burrito Fiesta", "descripcion" : "Un delicioso burrito grande acompañado de una bebida refrescante.", "alimento" : "Burrito de pollo", "cantA" : "1", "bebida" : "Agua de jamaica", "cantB" : "1", "precio" : "6.52", "estatus" : "Activo"}, ' +
  '{"nombre" : "Combo Enchiladas Delicias", "descripcion" : "Dos enchiladas con una bebida típica mexicana.", "alimento" : "Enchiladas de queso", "cantA" : "2", "bebida" : "Agua de tamarindo", "cantB" : "1", "precio" : "9.31", "estatus" : "Activo"}, ' +
  '{"nombre" : "Combo Quesadilla Suprema", "descripcion" : "Una quesadilla grande con una bebida tradicional.", "alimento" : "Quesadilla de carne al pastor", "cantA" : "1", "bebida" : "Refresco de cola", "cantB" : "1", "precio" : "5.40", "estatus" : "Activo"}, ' +
  '{"nombre" : "Combo Fajitas Festivas", "descripcion" : "Un plato de fajitas acompañado de una bebida refrescante.", "alimento" : "Fajitas mixtas (pollo y res)", "cantA" : "1", "bebida" : "Agua de limón con chía", "cantB" : "1", "precio" : "8.23", "estatus" : "Activo"}, ' +
  '{"nombre" : "Combo Tostadas Tradición", "descripcion" : "Dos tostadas con una bebida fresca.", "alimento" : "Tostadas de tinga de pollo", "cantA" : "2", "bebida" : "Refresco de manzana", "cantB" : "1", "precio" : "7.62", "estatus" : "Activo"}, ' +
  '{"nombre" : "Combo Tamalito Mexicano", "descripcion" : "Un tamal tradicional con una bebida mexicana.", "alimento" : "Tamal de rajas con queso", "cantA" : "1", "bebida" : "Champurrado", "cantB" : "1", "precio" : "4.48", "estatus" : "Activo"}, ' +
  '{"nombre" : "Combo Sopes Especiales", "descripcion" : "Dos sopes con una bebida refrescante.", "alimento" : "Sopes de chorizo", "cantA" : "2", "bebida" : "Agua de sandía", "cantB" : "1", "precio" : "8.04", "estatus" : "Activo"}, ' +
  '{"nombre" : "Combo Pozole Festín", "descripcion" : "Un tazón de pozole con una bebida tradicional.", "alimento" : "Pozole rojo", "cantA" : "1", "bebida" : "Agua de piña", "cantB" : "1", "precio" : "8.37", "estatus" : "Activo"}, ' +
  '{"nombre" : "Combo Flautas Fiesta", "descripcion" : "Tres flautas con una bebida refrescante.", "alimento" : "Flautas de pollo", "cantA" : "3", "bebida" : "Agua de melón", "cantB" : "1", "precio" : "15.36", "estatus" : "Activo"} ' +
  ']}';

/**********************************************************/
/* Inicialización de Combos con IDs Únicos */
/**********************************************************/
let combos = JSON.parse(TEXT_COMBOS).combos.map((combo, index) => ({
  id: String(index + 1).padStart(4, '0'),
  nombre: combo.nombre,
  descripcion: combo.descripcion,
  alimento: combo.alimento,
  cantA: combo.cantA,
  bebida: combo.bebida,
  cantB: combo.cantB,
  precio: combo.precio,
  estatus: combo.estatus
}));

/**********************************************************/
/* Configuración de Colores para la Interfaz de Usuario */
/**********************************************************/
const COLORS = ['#FA812F'];
const RANDOM_COLOR = COLORS[Math.floor(Math.random() * COLORS.length)];
document.body.style.backgroundColor = RANDOM_COLOR;
document.querySelectorAll('th').forEach(th => th.style.backgroundColor = RANDOM_COLOR);

/**********************************************************/
/* Función para Renderizar la Tabla de Combos Activos */
/**********************************************************/
function renderTable() {
  const tableBody = document.querySelector('#comboTable tbody');
  tableBody.innerHTML = '';

  combos.filter(combo => combo.estatus === 'Activo').forEach(combo => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${combo.id}</td>
      <td>${combo.nombre}</td>
      <td>${combo.descripcion}</td>
      <td>${combo.alimento} (${combo.cantA})</td>
      <td>${combo.bebida} (${combo.cantB})</td>
      <td>$${combo.precio}</td>
      <td>${combo.estatus}</td>
      <td>
        <button class="icon-button" onclick="editCombo('${combo.id}')">
          <img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar">
        </button>
        <button class="icon-button" onclick="confirmDeleteCombo('${combo.id}')">
          <img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar">
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

/**********************************************************/
/* Función para Agregar un Nuevo Combo */
/**********************************************************/
function addCombo() {
  const newId = (combos.length + 1).toString().padStart(4, '0');
  const nombre = document.getElementById('addComboNombre').value;
  const descripcion = document.getElementById('addComboDescripcion').value;
  const alimento = document.getElementById('addComboAlimento').value;
  const cantA = document.getElementById('addComboCantA').value;
  const bebida = document.getElementById('addComboBebida').value;
  const cantB = document.getElementById('addComboCantB').value;
  const precio = document.getElementById('addComboPrecio').value;
  const estatus = document.getElementById('addComboEstatus').value;

  // Validación de campos
  if (!nombre || !descripcion || !alimento || !cantA || !bebida || !cantB || !precio || !estatus) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const newCombo = {
    id: newId,
    nombre,
    descripcion,
    alimento,
    cantA,
    bebida,
    cantB,
    precio,
    estatus
  };

  combos.push(newCombo);
  renderTable();
  closeModal('addComboModal');
}

/**********************************************************/
/* Función para Editar un Combo Existente */
/**********************************************************/
function editCombo(id) {
  const combo = combos.find(c => c.id === id);
  if (!combo) {
    alert('Combo no encontrado.');
    return;
  }

  document.getElementById('editComboId').value = combo.id;
  document.getElementById('editComboNombre').value = combo.nombre;
  document.getElementById('editComboDescripcion').value = combo.descripcion;
  document.getElementById('editComboAlimento').value = combo.alimento;
  document.getElementById('editComboCantA').value = combo.cantA;
  document.getElementById('editComboBebida').value = combo.bebida;
  document.getElementById('editComboCantB').value = combo.cantB;
  document.getElementById('editComboPrecio').value = combo.precio;
  document.getElementById('editComboEstatus').value = combo.estatus;

  openModal('editComboModal');
}

/**********************************************************/
/* Función para Guardar los Cambios de Edición */
/**********************************************************/
function saveEditCombo() {
  const id = document.getElementById('editComboId').value;
  const combo = combos.find(c => c.id === id);
  if (!combo) {
    alert('Combo no encontrado.');
    return;
  }

  combo.nombre = document.getElementById('editComboNombre').value;
  combo.descripcion = document.getElementById('editComboDescripcion').value;
  combo.alimento = document.getElementById('editComboAlimento').value;
  combo.cantA = document.getElementById('editComboCantA').value;
  combo.bebida = document.getElementById('editComboBebida').value;
  combo.cantB = document.getElementById('editComboCantB').value;
  combo.precio = document.getElementById('editComboPrecio').value;
  combo.estatus = document.getElementById('editComboEstatus').value;

  renderTable();
  closeModal('editComboModal');
}

/**********************************************************/
/* Función para Confirmar la Eliminación de un Combo */
/**********************************************************/
function confirmDeleteCombo(id) {
  const confirmDelete = confirm('¿Está seguro de que desea eliminar este combo?');
  if (confirmDelete) {
    deleteCombo(id);
  }
}

/**********************************************************/
/* Función para Eliminar un Combo */
/**********************************************************/
function deleteCombo(id) {
  combos = combos.filter(combo => combo.id !== id);
  renderTable();
}

/**********************************************************/
/* Funciones de Utilidad para Manejo de Modales */
/**********************************************************/
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

/**********************************************************/
/* Inicializar la Tabla al Cargar la Página */
/**********************************************************/
document.addEventListener('DOMContentLoaded', renderTable);
