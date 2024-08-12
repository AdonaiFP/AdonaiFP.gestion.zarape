/**********************************************************/
/* Axolotl Technologies                                   */
/* 26/06/2024                                             */
/* Carlos Daniel Gomez Mendez                             */
/* Gestión de usuarios para una aplicación web            */
/**********************************************************/

// Variables y constantes
let usuariosTexto = '{"usuarios" : [ ' +
    '{"foto" : "", "nombre" : "admin", "contrasena":"1234", "cargo" : "Administrador", "estatus" : "Activo"} ' +
    ']}';

let usuarios = JSON.parse(usuariosTexto).usuarios.map((usuario, indice) => ({
    id: String(indice + 1).padStart(4, '0'),
    foto: usuario.foto,
    nombre: usuario.nombre,
    contraseña: usuario.contrasena,
    cargo: usuario.cargo,
    estatus: usuario.estatus
}));

const COLORES = ['#FA812F'];
const COLOR_ALEATORIO = COLORES[Math.floor(Math.random() * COLORES.length)];
document.body.style.backgroundColor = '#FA812F';
const elementosTH = document.querySelectorAll('th');
elementosTH.forEach(th => th.style.backgroundColor = '#FA812F');

/**********************************************************/
/* Función para renderizar la tabla de usuarios activos   */
/* Recorre la lista de usuarios y genera filas HTML       */
/* para cada usuario activo en la tabla de usuarios.      */
/**********************************************************/
function renderizarTabla() {
    const cuerpoTabla = document.querySelector('#userTable tbody');
    cuerpoTabla.innerHTML = '';

    usuarios.forEach(usuario => {
        if (usuario.estatus === 'Activo') {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${usuario.id}</td>
                <td><img src="${usuario.foto}" alt="Foto de ${usuario.nombre}" width="50"></td>
                <td>${usuario.nombre}</td>
                <td>${usuario.contraseña}</td>
                <td>${usuario.cargo}</td>
                <td>${usuario.estatus}</td>
                <td>
                    <button class="icon-button" onclick="editarUsuario('${usuario.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar"></button>
                    <button class="icon-button" onclick="confirmarEliminarUsuario('${usuario.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar"></button>
                </td>
            `;
            cuerpoTabla.appendChild(fila);
        }
    });

    // Llamar a la función para mostrar los objetos en la consola
    mostrarUsuariosEnConsola();
}

/**********************************************************/
/* Función para abrir el formulario de usuario            */
/* Muestra un formulario emergente con SweetAlert2        */
/* para agregar o editar un usuario.                      */
/**********************************************************/
function abrirFormularioUsuario(usuario = {}) {
    Swal.fire({
        title: usuario.id ? 'Editar Usuario' : 'Agregar Usuario',
        html: `
            <input type="hidden" id="userId" value="${usuario.id || ''}">
            <label for="foto">Foto:</label>
            <input type="file" id="foto" class="swal2-file" accept="image/*">
            ${usuario.foto ? `<img src="${usuario.foto}" id="previewFoto" alt="Foto de ${usuario.nombre}" width="50"><br>` : ''}
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" class="swal2-input" value="${usuario.nombre || ''}">
            <label for="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" class="swal2-input" value="${usuario.contraseña || ''}">
            <label for="cargo">Cargo:</label>
            <input type="text" id="cargo" class="swal2-input" value="${usuario.cargo || ''}">
        `,
        focusConfirm: false,
        confirmButtonText: 'Guardar',
        preConfirm: () => {
            return new Promise((resolve) => {
                const inputFoto = document.getElementById('foto');
                if (inputFoto.files[0]) {
                    const lector = new FileReader();
                    lector.onload = (e) => {
                        resolve({
                            id: document.getElementById('userId').value,
                            foto: e.target.result,
                            nombre: document.getElementById('nombre').value,
                            contraseña: document.getElementById('contraseña').value,
                            cargo: document.getElementById('cargo').value,
                        });
                    };
                    lector.readAsDataURL(inputFoto.files[0]);
                } else {
                    resolve({
                        id: document.getElementById('userId').value,
                        foto: usuario.foto,
                        nombre: document.getElementById('nombre').value,
                        contraseña: document.getElementById('contraseña').value,
                        cargo: document.getElementById('cargo').value,
                    });
                }
            });
        }
    }).then(resultado => {
        if (resultado.isConfirmed) {
            const { id, foto, nombre, contraseña, cargo } = resultado.value;
            if (id) {
                const indiceUsuario = usuarios.findIndex(usuario => usuario.id === id);
                usuarios[indiceUsuario] = { id, foto, nombre, contraseña, cargo, estatus: 'Activo' };
            } else {
                const nuevoId = String(usuarios.length ? Math.max(...usuarios.map(usuario => parseInt(usuario.id))) + 1 : 1).padStart(4, '0');
                usuarios.push({ id: nuevoId, foto, nombre, contraseña, cargo, estatus: 'Activo' });
            }
            renderizarTabla();
        }
    });

    const inputFoto = document.getElementById('foto');
    inputFoto.addEventListener('change', () => {
        const previewFoto = document.getElementById('previewFoto');
        if (inputFoto.files && inputFoto.files[0]) {
            const lector = new FileReader();
            lector.onload = (e) => {
                if (previewFoto) {
                    previewFoto.src = e.target.result;
                } else {
                    const img = document.createElement('img');
                    img.id = 'previewFoto';
                    img.src = e.target.result;
                    img.width = 50;
                    inputFoto.insertAdjacentElement('afterend', img);
                }
            };
            lector.readAsDataURL(inputFoto.files[0]);
        }
    });
}

/**********************************************************/
/* Función para editar un usuario                         */
/* Abre el formulario de edición para el usuario          */
/* correspondiente al ID proporcionado.                   */
/**********************************************************/
function editarUsuario(id) {
    const usuario = usuarios.find(usuario => usuario.id === id);
    abrirFormularioUsuario(usuario);
}

/**********************************************************/
/* Función para confirmar la eliminación de un usuario    */
/* Muestra un cuadro de diálogo de confirmación antes     */
/* de eliminar un usuario.                                */
/**********************************************************/
function confirmarEliminarUsuario(id) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            eliminarUsuario(id);
            Swal.fire(
                'Eliminado!',
                'El usuario ha sido eliminado.',
                'success'
            );
        }
    });
}

/**********************************************************/
/* Función para eliminar un usuario                       */
/* Marca el estado del usuario como inactivo              */
/* y actualiza la tabla.                                  */
/**********************************************************/
function eliminarUsuario(id) {
    const indiceUsuario = usuarios.findIndex(usuario => usuario.id === id);
    if (indiceUsuario !== -1) {
        usuarios[indiceUsuario].estatus = 'Inactivo';
        renderizarTabla();
    }
}

/**********************************************************/
/* Función para buscar en la tabla de usuarios            */
/* Filtra las filas de la tabla según el texto ingresado  */
/* en el campo de búsqueda.                               */
/**********************************************************/
function buscarEnTabla() {
    const input = document.getElementById('searchInput');
    const filtro = input.value.toLowerCase();
    const tabla = document.getElementById('userTable');
    const filas = tabla.getElementsByTagName('tr');

    for (let i = 1; i < filas.length; i++) {
        filas[i].style.display = 'none';
        const celdas = filas[i].getElementsByTagName('td');
        for (let j = 1; j < celdas.length; j++) { // Empezamos en 1 para excluir la columna de foto
            if (celdas[j]) {
                if (celdas[j].innerHTML.toLowerCase().indexOf(filtro) > -1) {
                    filas[i].style.display = '';
                    break;
                }
            }
        }
    }
}

/**********************************************************/
/* Función para mostrar los usuarios en la consola        */
/* Registra la lista actual de usuarios en la consola     */
/**********************************************************/
function mostrarUsuariosEnConsola() {
    console.log("Usuarios:", usuarios);
}

// Llamar a la función para mostrar los objetos en la consola cuando se cargue la página
renderizarTabla();
