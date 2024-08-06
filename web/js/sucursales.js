var text = '{"sucursales" : [ ' +
            '{"foto" : "data:image/jpeg;base64,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",\n\
            "nombre" : "Altacia", "direccion" : "Blvd Aeropuerto", "latitud" : "20.674441", "longitud" : "-103.387517", "url" : "http://sucursal_altacia", "horaInicio" : "07:00", "horaFin" : "19:00", "estatus" : "Activo"} ' +
            ']}';

        let sucursales = JSON.parse(text).sucursales.map((sucursal, index) => ({
            id: String(index + 1).padStart(4, '0'),
            foto: sucursal.foto,
            nombre: sucursal.nombre,
            direccion: sucursal.direccion,
            latitud: sucursal.latitud,
            longitud: sucursal.longitud,
            url: sucursal.url,
            horaInicio: sucursal.horaInicio,
            horaFin: sucursal.horaFin,
            estatus: sucursal.estatus
        }));

        const colors = ['#FAAF08', '#FA812F', '#FA4032'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        const thElements = document.querySelectorAll('th');
        thElements.forEach(th => th.style.backgroundColor = randomColor);

        function renderTable() {
            const tableBody = document.querySelector('#sucursalTable tbody');
            tableBody.innerHTML = '';

            sucursales.forEach(sucursal => {
                if (sucursal.estatus === 'Activo') {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${sucursal.id}</td>
                        <td><img src="${sucursal.foto}" alt="Foto de ${sucursal.nombre}" width="200"></td>
                        <td>${sucursal.nombre}</td>
                        <td>${sucursal.direccion}</td>
                        <td>${sucursal.latitud} ${sucursal.longitud}</td>
                        <td>${sucursal.url}</td>
                        <td>${sucursal.horaInicio}-${sucursal.horaFin}</td>
                        <td>${sucursal.estatus}</td>
                        <td>
                            <button class="icon-button" onclick="editSucursal('${sucursal.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/edit.png" alt="Editar"></button>
                            <button class="icon-button" onclick="confirmDeleteSucursal('${sucursal.id}')"><img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar"></button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                }
            });

            logSucursalToConsole();
        }

        function openSucursalForm(sucursal = {}) {
            const defaultLat = 21.120704;
            const defaultLng = -101.684265;
            const isNew = !sucursal.id;
            
            Swal.fire({
                title: sucursal.id ? 'Editar Sucursal' : 'Agregar Sucursal',
                html: `
                    <input type="hidden" id="sucursalId" value="${sucursal.id || ''}">
                    <label for="foto">Foto:</label>
                    <input type="file" id="foto" class="swal2-file" accept="image/*">
                    ${sucursal.foto ? `<img src="${sucursal.foto}" id="previewFoto" alt="Foto de ${sucursal.nombre}" width="100"><br>` : ''}<br>
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" class="swal2-input" value="${sucursal.nombre || ''}">
                    <label for="direccion">Dirección:</label>
                    <input type="text" id="direccion" class="swal2-input" value="${sucursal.direccion || ''}">
                    <label for="latitud">Latitud:</label>
                    <input type="text" id="latitud" class="swal2-input" value="${sucursal.latitud || defaultLat}">
                    <label for="longitud">Longitud:</label>
                    <input type="text" id="longitud" class="swal2-input" value="${sucursal.longitud || defaultLng}">
                    <div id="map" style="height: 300px;"></div>
                    <button class="swal2-confirm swal2-styled" id="openMapBtn">Seleccionar en Mapa</button><br>
                    <label for="url">URL:</label>
                    <input type="text" id="url" class="swal2-input" value="${sucursal.url || ''}">
                    <label for="horaInicio">Hora de Inicio:</label>
                    <input type="text" id="horaInicio" class="swal2-input" value="${sucursal.horaInicio || ''}">
                    <label for="horaFin">Hora de Cierre:</label>
                    <input type="text" id="horaFin" class="swal2-input" value="${sucursal.horaFin || ''}">
                `,
                focusConfirm: false,
                confirmButtonText: 'Guardar',
                    preConfirm: () => {
        return new Promise((resolve) => {
            const fotoInput = document.getElementById('foto');
            if (fotoInput.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve({
                        id: document.getElementById('sucursalId').value,
                        foto: e.target.result,
                        nombre: document.getElementById('nombre').value,
                        direccion: document.getElementById('direccion').value,
                        latitud: document.getElementById('latitud').value,
                        longitud: document.getElementById('longitud').value,
                        url: document.getElementById('url').value,
                        horaInicio: document.getElementById('horaInicio').value,
                        horaFin: document.getElementById('horaFin').value
                    });
                };
                reader.readAsDataURL(fotoInput.files[0]);
            } else {
                resolve({
                    id: document.getElementById('sucursalId').value,
                    foto: sucursal.foto,
                    nombre: document.getElementById('nombre').value,
                    direccion: document.getElementById('direccion').value,
                    latitud: document.getElementById('latitud').value,
                    longitud: document.getElementById('longitud').value,
                    url: document.getElementById('url').value,
                    horaInicio: document.getElementById('horaInicio').value,
                    horaFin: document.getElementById('horaFin').value
                });
            }
        });
    }
}).then(result => {
    if (result.isConfirmed) {
        const { id, foto, nombre, direccion, latitud, longitud, url, horaInicio, horaFin } = result.value;
        if (id) {
            const sucursalIndex = sucursales.findIndex(sucursal => sucursal.id === id);
            sucursales[sucursalIndex] = { id, foto, nombre, direccion, latitud, longitud, url, horaInicio, horaFin, estatus: 'Activo' };
        } else {
            const newId = String(sucursales.length ? Math.max(...sucursales.map(sucursal => parseInt(sucursal.id))) + 1 : 1).padStart(4, '0');
            sucursales.push({ id: newId, foto, nombre, direccion, latitud, longitud, url, horaInicio, horaFin, estatus: 'Activo' });
        }
        renderTable();
    }
});

            const map = L.map('map').setView([parseFloat(sucursal.latitud) || defaultLat, parseFloat(sucursal.longitud) || defaultLng], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            if (sucursal.latitud && sucursal.longitud) {
                L.marker([parseFloat(sucursal.latitud), parseFloat(sucursal.longitud)]).addTo(map);
            }

            map.on('click', e => {
                document.getElementById('latitud').value = e.latlng.lat.toFixed(6);
                document.getElementById('longitud').value = e.latlng.lng.toFixed(6);
            });

            const openMapBtn = document.getElementById('openMapBtn');
            openMapBtn.addEventListener('click', () => {
                map.setView([parseFloat(document.getElementById('latitud').value) || defaultLat, parseFloat(document.getElementById('longitud').value) || defaultLng], 15);
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

        function editSucursal(id) {
            const sucursal = sucursales.find(sucursal => sucursal.id === id);
            openSucursalForm(sucursal);
        }

        function confirmDeleteSucursal(id) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'No podrás revertir esto',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then(result => {
                if (result.isConfirmed) {
                    deleteSucursal(id);
                    Swal.fire('¡Eliminado!', 'La sucursal ha sido eliminada.', 'success');
                }
            });
        }

        function deleteSucursal(id) {
            const sucursalIndex = sucursales.findIndex(sucursal => sucursal.id === id);
            sucursales[sucursalIndex].estatus = 'Inactivo';
            renderTable();
        }

        function searchTable() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const tableRows = document.querySelectorAll('#sucursalTable tbody tr');
            tableRows.forEach(row => {
                const cells = Array.from(row.getElementsByTagName('td'));
                const matches = cells.some(cell => cell.textContent.toLowerCase().includes(searchTerm));
                row.style.display = matches ? '' : 'none';
            });
        }

        function logSucursalToConsole() {
            console.log('Lista de Sucursales:');
            sucursales.forEach(sucursal => console.log(sucursal));
        }

        renderTable();