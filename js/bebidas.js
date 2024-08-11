var text = '{"usuarios" : [ ' +
'{"foto" : "data:image/jpeg;base64,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",\n\
"nombre" : "Agua de horchata", "precio":"30", "categoria" : "bebida fria", "descripcion": "Descripcion del producto", "estatus" : "Activo"} ' +
']}';

let users = JSON.parse(text).usuarios.map((user, index) => ({
    id: String(index + 1).padStart(4, '0'),
    foto: user.foto,
    nombre: user.nombre,
    precio: user.precio,
    categoria: user.categoria,
    descripcion: user.descripcion,
    estatus: user.estatus
}));

const colors = ['#FAAF08', '#FA812F', '#FA4032'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomColor;
const thElements = document.querySelectorAll('th');
thElements.forEach(th => th.style.backgroundColor = randomColor);

function renderTable() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td><img src="${user.foto}" alt="Foto de ${user.nombre}" width="50"></td>
            <td>${user.nombre}</td>
            <td>${user.descripcion}</td>
            <td>$${user.precio}</td>
            <td>${user.categoria}</td>
            <td>${user.estatus}</td>
            <td>
                <button class="icon-button" onclick="editUser('${user.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar"></button>
                <button class="icon-button" onclick="confirmToggleStatus('${user.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar"></button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Llamar a la función para mostrar los objetos en la consola
    logUsersToConsole();
}

function openUserForm(user = {}) {
    const isEditMode = Boolean(user.id);
    Swal.fire({
        title: user.id ? 'Editar Producto' : 'Agregar Producto',
        html: `
            <input type="hidden" id="userId" value="${user.id || ''}">
            <label for="foto">Foto:</label>
            <input type="file" id="foto" class="swal2-file" accept="image/*">
            ${user.foto ? `<img src="${user.foto}" id="previewFoto" alt="Foto de ${user.nombre}" width="50"><br>` : ''}
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" class="swal2-input" value="${user.nombre || ''}">
            <label for="descripcion">Descripción:</label>
            <textarea id="descripcion" class="swal2-textarea">${user.descripcion || ''}</textarea>
            <label for="precio">Precio:</label>
            <input type="number" id="precio" class="swal2-input" value="${user.precio || ''}"><br>
            <label for="categoria">Categoría:</label>
            <input type="text" id="categoria" class="swal2-input" value="${user.categoria || ''}">
            ${isEditMode ? `
                <label for="estatus">Estatus:</label>
                <select id="estatus" class="swal2-select">
                    <option value="Activo" ${user.estatus === 'Activo' ? 'selected' : ''}>Activo</option>
                </select>
            ` : ''}
        `,
        focusConfirm: false,
        confirmButtonText: 'Guardar',
        preConfirm: () => {
            return new Promise((resolve, reject) => {
                const fotoInput = document.getElementById('foto');
                const nombreInput = document.getElementById('nombre');
                const descripcionInput = document.getElementById('descripcion');
                const precioInput = document.getElementById('precio');
                const categoriaInput = document.getElementById('categoria');

                if (!nombreInput.value || !descripcionInput.value || !precioInput.value || !categoriaInput.value || (isEditMode && !user.foto && !fotoInput.files[0])) {
                    Swal.showValidationMessage('Todos los campos son obligatorios');
                    return false;
                }

                if (isNaN(precioInput.value) || precioInput.value <= 0) {
                    Swal.showValidationMessage('El precio debe ser un número válido y mayor a 0');
                    return false;
                }

                if (fotoInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        resolve({
                            id: document.getElementById('userId').value,
                            foto: e.target.result,
                            nombre: document.getElementById('nombre').value,
                            descripcion: document.getElementById('descripcion').value,
                            precio: document.getElementById('precio').value,
                            categoria: document.getElementById('categoria').value,
                            estatus: isEditMode ? 'Activo' : 'Activo',
                        });
                    };
                    reader.readAsDataURL(fotoInput.files[0]);
                } else {
                    resolve({
                        id: document.getElementById('userId').value,
                        foto: user.foto,
                        nombre: document.getElementById('nombre').value,
                        descripcion: document.getElementById('descripcion').value,
                        precio: document.getElementById('precio').value,
                        categoria: document.getElementById('categoria').value,
                        estatus: isEditMode ? 'Activo' : 'Activo',
                    });
                }
            });
        }
    }).then(result => {
        if (result.isConfirmed) {
            const { id, foto, nombre, descripcion, precio, categoria, estatus } = result.value;
            if (id) {
                const userIndex = users.findIndex(user => user.id === id);
                users[userIndex] = { id, foto, nombre, descripcion, precio, categoria, estatus };
            } else {
                const newId = String(users.length ? Math.max(...users.map(user => parseInt(user.id))) + 1 : 1).padStart(4, '0');
                users.push({ id: newId, foto, nombre, descripcion, precio, categoria, estatus });
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

function editUser(id) {
    const user = users.find(user => user.id === id);
    openUserForm(user);
}

function confirmToggleStatus(id) {
    const user = users.find(user => user.id === id);

    Swal.fire({
        title: user.estatus === 'Activo' ? '¿Estás seguro de inactivar esta bebida?' : '¿Estás seguro de eliminar esta bebida?',
        text: user.estatus === 'Activo' ? 'Esta acción cambiará el estatus del producto a inactivo.' : 'Esta acción eliminará el producto.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: user.estatus === 'Activo' ? 'Sí, inactivar' : 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            if (user.estatus === 'Activo') {
                toggleStatus(id);
            } else {
                deleteUser(id);
            }
        }
    });
}

function toggleStatus(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1 && users[userIndex].estatus === 'Activo') {
        users[userIndex].estatus = 'Inactivo';
        renderTable();
    }
}

function deleteUser(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        renderTable();
    }
}

function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('userTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = 'none';
        const td = tr[i].getElementsByTagName('td');
        for (let j = 1; j < td.length; j++) { // Empezamos en 1 para excluir la columna de foto
            if (td[j]) {
                if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                    break;
                }
            }
        }
    }
}

function logUsersToConsole() {
    console.log("Productos:", users);
}

// Llamar a la función para mostrar los objetos en la consola cuando se cargue la página
renderTable();
