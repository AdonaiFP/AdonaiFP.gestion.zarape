/**********************************************************/
/* Axolotl Technologies */
/* 11/08/2024 */
/* Rey Adonaí Floreano Parra */
/* Gestión de Combos y Menús de Alimentos y Bebidas */
/**********************************************************/

/**********************************************************/
/* Constantes de Alimentos y Bebidas */
/**********************************************************/
const listaBebidas = [
    { nombre: "Agua de horchata", precio: 30 },
    { nombre: "Jugo de naranja", precio: 25 },
    { nombre: "Té helado", precio: 35 },
    { nombre: "Limonada", precio: 28 },
    { nombre: "Aguas", precio: 32 },
    { nombre: "Smoothie de fresa", precio: 40 },
    { nombre: "Café frío", precio: 45 },
    { nombre: "Batido de plátano", precio: 38 }
    ];
        
const listAlimentos = [
    { nombre: "Tostada de Aguacate", precio: 5.99 },
    { nombre: "Omelette de champiñones", precio: 7.50 },
    { nombre: "Ensalada de frutas", precio: 4.99 },
    { nombre: "Pancakes", precio: 6.50 },
    { nombre: "Croissant de chocolate", precio: 3.99 },
    { nombre: "Churros", precio: 2.50 },
    { nombre: "Tacos de canasta", precio: 3.00 },
    { nombre: "Ensalada César", precio: 5.75 },
    { nombre: "Torta de milanesa", precio: 6.99 }
    ];

const alimentos = [
    { nombre: "Tostada de Aguacate", precio: 5.99 },
    { nombre: "Omelette de champiñones", precio: 7.50 },
    { nombre: "Ensalada de frutas", precio: 4.99 },
    { nombre: "Pancakes", precio: 6.50 },
    { nombre: "Croissant de chocolate", precio: 3.99 },
    { nombre: "Churros", precio: 2.50 },
    { nombre: "Tacos de canasta", precio: 3.00 },
    { nombre: "Ensalada César", precio: 5.75 },
    { nombre: "Torta de milanesa", precio: 6.99 }
    ];
        
const bebidas = [
    { nombre: "Agua de horchata", precio: 30 },
    { nombre: "Jugo de naranja", precio: 25 },
    { nombre: "Té helado", precio: 35 },
    { nombre: "Limonada", precio: 28 },
    { nombre: "Aguas", precio: 32 },
    { nombre: "Smoothie de fresa", precio: 40 },
    { nombre: "Café frío", precio: 45 },
    { nombre: "Batido de plátano", precio: 38 }
    ];

/**********************************************************/
/* Configuración de Combos a partir de una Cadena JSON */
/**********************************************************/
var text = '{"combos" : [ ' +
    '{"nombre" : "Combo Tacos Clásicos", "descripcion" : "Tres tacos clásicos con una refrescante bebida.", "alimentos" : ["Tacos de carne asada"], "cantA" : ["3"], "bebidas" : ["Agua de horchata"], "cantB" : ["1"], "precio" : "12.56", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Burrito Fiesta", "descripcion" : "Un delicioso burrito grande acompañado de una bebida refrescante.", "alimentos" : ["Burrito de pollo"], "cantA" : ["1"], "bebidas" : ["Agua de jamaica"], "cantB" : ["1"], "precio" : "6.52", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Enchiladas Delicias", "descripcion" : "Dos enchiladas con una bebida típica mexicana.", "alimentos" : ["Enchiladas de queso"], "cantA" : ["2"], "bebidas" : ["Agua de tamarindo"], "cantB" : ["1"], "precio" : "9.31", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Quesadilla Suprema", "descripcion" : "Una quesadilla grande con una bebida tradicional.", "alimentos" : ["Quesadilla de carne al pastor"], "cantA" : ["1"], "bebidas" : ["Refresco de cola"], "cantB" : ["1"], "precio" : "5.40", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Fajitas Festivas", "descripcion" : "Un plato de fajitas acompañado de una bebida refrescante.", "alimentos" : ["Fajitas mixtas (pollo y res)"], "cantA" : ["1"], "bebidas" : ["Agua de limón con chía"], "cantB" : ["1"], "precio" : "8.23", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Tostadas Tradición", "descripcion" : "Dos tostadas con una bebida fresca.", "alimentos" : ["Tostadas de tinga de pollo"], "cantA" : ["2"], "bebidas" : ["Refresco de manzana"], "cantB" : ["1"], "precio" : "7.62", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Tamalito Mexicano", "descripcion" : "Un tamal tradicional con una bebida mexicana.", "alimentos" : ["Tamal de rajas con queso"], "cantA" : ["1"], "bebidas" : ["Champurrado"], "cantB" : ["1"], "precio" : "4.48", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Sopes Especiales", "descripcion" : "Dos sopes con una bebida refrescante.", "alimentos" : ["Sopes de chorizo"], "cantA" : ["2"], "bebidas" : ["Agua de sandía"], "cantB" : ["1"], "precio" : "8.04", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Pozole Festín", "descripcion" : "Un tazón de pozole con una bebida tradicional.", "alimentos" : ["Pozole rojo"], "cantA" : ["1"], "bebidas" : ["Agua de piña"], "cantB" : ["1"], "precio" : "8.37", "estatus" : "Activo"}, ' +
    '{"nombre" : "Combo Flautas Fiesta", "descripcion" : "Tres flautas con una bebida refrescante.", "alimentos" : ["Flautas de pollo"], "cantA" : ["3"], "bebidas" : ["Agua de melón"], "cantB" : ["1"], "precio" : "15.36", "estatus" : "Activo"} ' +
    ']}';

/**********************************************************/
/* Inicialización de Combos con IDs Únicos */
/**********************************************************/
/**********************************************************/
/* Configuración de Colores para la Interfaz de Usuario */
/**********************************************************/
const colors = ['#FA812F'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomColor;
const thElements = document.querySelectorAll('th');
thElements.forEach(th => th.style.backgroundColor = randomColor);

/**********************************************************/
/* Función para Renderizar la Tabla de Combos */
/**********************************************************/
function renderTable() {
    const tableBody = document.querySelector('#comboTable tbody');
    tableBody.innerHTML = '';
    combos.forEach(combo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${combo.id}</td>
            <td>${combo.nombre}</td>
            <td>${combo.descripcion}</td>
            <td>${combo.alimentos.map((alimento, index) => `${alimento} (${combo.cantA[index]})`).join('<br>')}</td>
            <td>${combo.bebidas.map((bebida, index) => `${bebida} (${combo.cantB[index]})`).join('<br>')}</td>
            <td>$${combo.precio}</td>
            <td>${combo.estatus}</td>
            <td>
                <button class="icon-button" onclick="editCombo('${combo.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar"></button>
                <button class="icon-button" onclick="confirmDeleteCombo('${combo.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar"></button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

/**********************************************************/
/* Función para buscar un Combo en la tabla por todos sus campos */
/**********************************************************/
function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('comboTable');
    const tr = table.getElementsByTagName('tr');
    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = 'none';
        const td = tr[i].getElementsByTagName('td');
        for (let j = 1; j < td.length; j++) {
            if (td[j]) {
                if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                    break;
                }
            }
        }
    }
}

/**********************************************************/
/* Función para Calcular el Precio Total del Combo */
/**********************************************************/
function calcularPrecio() {
    // Obtén todos los elementos de alimentos y bebidas
    const alimentos = Array.from(document.querySelectorAll('#alimentosContainer .alimento'));
    const cantA = Array.from(document.querySelectorAll('#alimentosContainer .cantA'));
    const bebidas = Array.from(document.querySelectorAll('#bebidasContainer .bebida'));
    const cantB = Array.from(document.querySelectorAll('#bebidasContainer .cantB'));

    let precioTotal = 0;

    // Calcula el precio total de los alimentos
    alimentos.forEach((alimentoSelect, index) => {
        const alimentoSeleccionado = listAlimentos.find(item => item.nombre === alimentoSelect.value);
        const cantidadA = parseInt(cantA[index].value) || 0;
        if (alimentoSeleccionado && cantidadA > 0) {
            precioTotal += alimentoSeleccionado.precio * cantidadA;
        }
    });

    // Calcula el precio total de las bebidas
    bebidas.forEach((bebidaSelect, index) => {
        const bebidaSeleccionada = listaBebidas.find(item => item.nombre === bebidaSelect.value);
        const cantidadB = parseInt(cantB[index].value) || 0;
        if (bebidaSeleccionada && cantidadB > 0) {
            precioTotal += bebidaSeleccionada.precio * cantidadB;
        }
    });

    // Aplicar un descuento del 10% si se desea
    const precioConDescuento = precioTotal * 0.9;
    console.log(`Precio total con descuento: ${precioConDescuento.toFixed(2)}`);
    document.getElementById('comboPrice').value = `${precioConDescuento.toFixed(2)}`;
}

document.addEventListener('input', function(event) {
    if (event.target.classList.contains('alimento') || event.target.classList.contains('cantA') ||
        event.target.classList.contains('bebida') || event.target.classList.contains('cantB')) {
        calcularPrecio();
    }
});

/**********************************************************/
/* Función para abrir el formulario de un Combo */
/**********************************************************/
function openComboForm(combo = {}) {
    Swal.fire({
        title: combo.id ? 'Editar Combo' : 'Agregar Combo',
        html: `
            <input type="hidden" id="comboId" value="${combo.id || ''}">
            <input type="text" id="comboName" class="swal2-input" placeholder="Nombre" value="${combo.nombre || ''}">
            <input type="text" id="comboDesc" class="swal2-input" placeholder="Descripción" value="${combo.descripcion || ''}">
            <div id="alimentosContainer">
                ${generateFields('alimentosContainer', combo.alimentos, combo.cantA, 'alimento')}
            </div>
            <button onclick="agregarAlimentos()">Añadir Alimento</button><br>
            <div id="bebidasContainer">
                ${generateFields('bebidasContainer', combo.bebidas, combo.cantB, 'bebida')}
            </div>
            <button onclick="agregarBebidas()">Añadir Bebida</button><br>
            <input type="text" id="comboPrice" class="swal2-input" readonly value="${combo.precio || ''}">
            <select id="comboStatus" class="swal2-select">
                <option value="Activo" ${combo.estatus === 'Activo' ? 'selected' : ''}>Activo</option>
                <option value="Inactivo" ${combo.estatus === 'Inactivo' ? 'selected' : ''}>Inactivo</option>
            </select>
        `,
        focusConfirm: false,
        preConfirm: () => {
            const id = document.getElementById('comboId').value;
            const nombre = document.getElementById('comboName').value;
            const descripcion = document.getElementById('comboDesc').value;
            const alimentos = Array.from(document.querySelectorAll('#alimentosContainer .alimento')).map(el => el.value);
            const cantA = Array.from(document.querySelectorAll('#alimentosContainer .cantA')).map(el => el.value);
            const bebidas = Array.from(document.querySelectorAll('#bebidasContainer .bebida')).map(el => el.value);
            const cantB = Array.from(document.querySelectorAll('#bebidasContainer .cantB')).map(el => el.value);
            const precio = document.getElementById('comboPrice').value;
            const estatus = document.getElementById('comboStatus').value;

            if (!nombre || !descripcion || !alimentos.length || !bebidas.length || !precio) {
                Swal.showValidationMessage('Todos los campos son obligatorios');
                return false;
            }

            if (id) {
                const comboIndex = combos.findIndex(c => c.id === id);
                combos[comboIndex] = { id, nombre, descripcion, alimentos, cantA, bebidas, cantB, precio, estatus };
            } else {
                combos.push({ id: String(combos.length + 1).padStart(4, '0'), nombre, descripcion, alimentos, cantA, bebidas, cantB, precio, estatus });
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            renderTable();
        }
    });
}

/**********************************************************/
/* Función para generar campos de alimentos y bebidas */
/**********************************************************/
function generateFields(containerId, items = [], quantities = [], type) {
    return items.map((item, index) => `
        <label for="${type}${index}">${type.charAt(0).toUpperCase() + type.slice(1)}:</label>
        <select id="${type}${index}" class="swal2-input ${type}">
            ${generarOpcionesHTML(item, type)}
        </select>
        <label for="cant${type.charAt(0).toUpperCase() + type.slice(1)}${index}">#:</label>
        <input type="number" min="1" id="cant${type.charAt(0).toUpperCase() + type.slice(1)}${index}" class="swal2-input cant${type.charAt(0).toUpperCase() + type.slice(1)}" value="${quantities[index] || ''}" oninput="calcularPrecio()">
        <br>
    `).join('');
}

/**********************************************************/
/* Función para agregar nuevos campos de alimentos */
/**********************************************************/
function agregarAlimentos() {
    agregarFields('alimentosContainer', 'alimento');
}

/**********************************************************/
/* Función para agregar nuevos campos de bebidas */
/**********************************************************/
function agregarBebidas() {
    agregarFields('bebidasContainer', 'bebida');
}

/**********************************************************/
/* Función para Editar un Combo */
/**********************************************************/
function editCombo(id) {
    const combo = combos.find(combo => combo.id === id);
    openComboForm(combo);
}

/**********************************************************/
/* Función para confirmar la eliminación de un Combo */
/**********************************************************/
function confirmDeleteCombo(id) {
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteCombo(id);
            Swal.fire(
                'Eliminado!',
                'El combo ha sido eliminado.',
                'success'
            );
        }
    });
}

/**********************************************************/
/* Función para eliminar un Combo */
/**********************************************************/
function deleteCombo(id) {
    const comboIndex = combos.findIndex(combo => combo.id === id);
    if (comboIndex !== -1) {
        combos[comboIndex].estatus = 'Inactivo';
        renderTable();
    }
}

/**********************************************************/
/* Inicialización de la tabla al cargar la página */
/**********************************************************/
<<<<<<< HEAD
renderTable(); // Renderizar la tabla al cargar
=======
>>>>>>> 0bbd08462eec5b47b594b6f831e9a84892530d05
