/**********************************************************/
/* Axolotl Technologies */
/* 19/07/2024 */
/* Rey Adonaí Floreano Parra */
/* Gestión de Alimentos: Programa para gestionar los alimentos en el restaurante */
/**********************************************************/

/**********************************************************/
/* Variables globales y datos iniciales */
/**********************************************************/
let alimentos = [
    {
        "id": "0001",
        "foto": "",
        "nombre": "Tostada de aguacate",
        "descripcion": "Deliciosa tostada de aguacate con tomate y cilantro.",
        "precio": 5.99,
        "categoria": "Desayuno",
        "estatus": "Activo"
    },
    {
        "id": "0002",
        "foto": "",
        "nombre": "Omelette de champiñones",
        "descripcion": "Omelette de huevos orgánicos con champiñones frescos.",
        "precio": 7.50,
        "categoria": "Desayuno",
        "estatus": "Activo"
    },
    {
        "id": "0003",
        "foto": "",
        "nombre": "Ensalada de frutas",
        "descripcion": "Mezcla de frutas frescas cortadas en cubos con miel y yogur.",
        "precio": 4.99,
        "categoria": "Postre",
        "estatus": "Activo"
    }
];

/**********************************************************/
/* Configuración de color de fondo aleatorio */
/**********************************************************/
const colors = ['#FA4032'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomColor;

/**********************************************************/
/* Función para renderizar la tabla de alimentos */
/**********************************************************/
function renderTable() {
    const tableBody = document.querySelector('#alimentoTable tbody');
    tableBody.innerHTML = '';

    alimentos.forEach(alimento => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${alimento.id}</td>
            <td><img src="${alimento.foto}" alt="Foto de ${alimento.nombre}" width="50"></td>
            <td>${alimento.nombre}</td>
            <td>${alimento.descripcion}</td>
            <td>${alimento.precio.toFixed(2)}</td>
            <td>${alimento.categoria}</td>
            <td>${alimento.estatus}</td>
            <td>
                <button class="icon-button" onclick="editAlimento('${alimento.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar"></button>
                <button class="icon-button" onclick="confirmDeleteAlimento('${alimento.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar"></button>
            </td>
        `;
        tableBody.appendChild(row);

        // Aplicar estilo de fondo rojo a las etiquetas th
        const thElements = document.querySelectorAll('th');
        thElements.forEach(th => th.style.backgroundColor = 'red');
    });

    logAlimentosToConsole();
}

/**********************************************************/
/* Función para abrir el formulario de agregar/editar alimento */
/**********************************************************/
function openAlimentoForm(alimento = {}) {
    Swal.fire({
        title: alimento.id ? 'Editar Alimento' : 'Agregar Alimento',
        html: `
            <input type="hidden" id="alimentoId" value="${alimento.id || ''}">
            <label for="foto">Foto:</label>
            <input type="file" id="foto" class="swal2-file" accept="image/*">
            ${alimento.foto ? `<img src="${alimento.foto}" id="previewFoto" alt="Foto de ${alimento.nombre}" width="50"><br>` : ''}
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" class="swal2-input" value="${alimento.nombre || ''}">
            <label for="descripcion">Descripción:</label>
            <input type="text" id="descripcion" class="swal2-input" value="${alimento.descripcion || ''}">
            <br>
            <label for="precio">Precio:</label>
            <input type="number" id="precio" class="swal2-input" value="${alimento.precio || ''}"><br>
            <label for="categoria">Categoría:</label>
            <input type="text" id="categoria" class="swal2-input" value="${alimento.categoria || ''}">
        `,
        focusConfirm: false,
        confirmButtonText: 'Guardar',
        preConfirm: () => {
            return new Promise((resolve, reject) => {
                const fotoInput = document.getElementById('foto');
                if (fotoInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        resolve({
                            id: document.getElementById('alimentoId').value,
                            foto: e.target.result,
                            nombre: document.getElementById('nombre').value,
                            descripcion: document.getElementById('descripcion').value,
                            precio: parseFloat(document.getElementById('precio').value),
                            categoria: document.getElementById('categoria').value,
                        });
                    };
                    reader.readAsDataURL(fotoInput.files[0]);
                } else {
                    const nombre = document.getElementById('nombre').value;
                    const descripcion = document.getElementById('descripcion').value;
                    const precio = parseFloat(document.getElementById('precio').value);
                    const categoria = document.getElementById('categoria').value;

                    if (!nombre || !descripcion || !precio || !categoria) {
                        Swal.showValidationMessage('Por favor completa todos los campos.');
                        reject('Por favor completa todos los campos.');
                    } else {
                        resolve({ id: document.getElementById('alimentoId').value, foto: alimento.foto, nombre, descripcion, precio, categoria });
                    }
                }
            });
        }
    }).then(result => {
        if (result.isConfirmed) {
            const { id, foto, nombre, descripcion, precio, categoria } = result.value;
            if (id) {
                const alimentoIndex = alimentos.findIndex(alimento => alimento.id === id);
                alimentos[alimentoIndex] = { id, foto, nombre, descripcion, precio, categoria, estatus: 'Activo' };
            } else {
                const newId = String(alimentos.length ? Math.max(...alimentos.map(alimento => parseInt(alimento.id))) + 1 : 1).padStart(4, '0');
                alimentos.push({ id: newId, foto, nombre, descripcion, precio, categoria, estatus: 'Activo' });
            }
            renderTable();
        }
    });

    const fotoInput = document.getElementById('foto');
    fotoInput.addEventListener('change', () => {
        const previewFoto = document.getElementById('previewFoto');
        if (fotoInput.files && fotoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (previewFoto) {
                    previewFoto.src = e.target.result;
                } else {
                    const img = document.createElement('img');
                    img.id = 'previewFoto';
                    img.src = e.target.result;
                    img.width = 50;
                    fotoInput.insertAdjacentElement('afterend', img);
                }
            };
            reader.readAsDataURL(fotoInput.files[0]);
        }
    });
}

/**********************************************************/
/* Función para editar un alimento existente */
/**********************************************************/
function editAlimento(id) {
    const alimento = alimentos.find(alimento => alimento.id === id);
    openAlimentoForm(alimento);
}

/**********************************************************/
/* Función para confirmar la eliminación de un alimento */
/**********************************************************/
function confirmDeleteAlimento(id) {
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
            deleteAlimento(id);
            Swal.fire(
                'Eliminado!',
                'El alimento ha sido marcado como inactivo.',
                'success'
            );
        }
    });
}

/**********************************************************/
/* Función para eliminar un alimento (marcar como inactivo) */
/**********************************************************/
function deleteAlimento(id) {
    const alimentoIndex = alimentos.findIndex(alimento => alimento.id === id);
    if (alimentoIndex !== -1) {
        alimentos[alimentoIndex].estatus = 'Inactivo';
        renderTable();
    }
}

/**********************************************************/
/* Función para buscar en la tabla de alimentos */
/**********************************************************/
function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('alimentoTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = 'none';
        const td = tr[i].getElementsByTagName('td');
        for (let j = 1; j < td.length - 1; j++) { // Excluir la columna de estatus
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
/* Función para registrar los alimentos en la consola */
/**********************************************************/
function logAlimentosToConsole() {
    console.log("Alimentos:", alimentos);
}

/**********************************************************/
/* Inicializar la renderización de la tabla al cargar la página */
/**********************************************************/
renderTable();
