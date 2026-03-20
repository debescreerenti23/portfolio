const proyectos = [
    { titulo: "Web dj", descripcion: "Web ideal para dj's", link: "https://debescreerenti23.github.io/dj-website/", sticker: "🎶", clase: "t-personal" },
    { titulo: "Hábitos", descripcion: "Control de metas", link: "https://debescreerenti23.github.io/mis-habitos/", sticker: "📅", clase: "t-habitos" },
    { titulo: "Biblioteca", descripcion: "Mis lecturas", link: "https://debescreerenti23.github.io/mi-biblioteca/", sticker: "📚", clase: "t-biblioteca" },
    { titulo: "Web Book", descripcion: "Libro en línea muy divertido", link: "https://debescreerenti23.github.io/web-book/", sticker: "📚", clase: "t-webbook"}
];

const contenedor = document.getElementById('cards-container');
const buscador = document.getElementById('buscador');

// Función para pintar (ahora acepta una lista como parámetro)
function renderizarProyectos(lista) {
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">No se encontraron proyectos... 😅</p>`;
        return;
    }

    lista.forEach(proyecto => {
        const cardHTML = `
            <div class="card ${proyecto.clase}">
                <div class="sticker">${proyecto.sticker}</div>
                <div class="card-content">
                    <h3>${proyecto.titulo}</h3>
                    <p>${proyecto.descripcion}</p>
                    <a href="${proyecto.link}" target="_blank">Ver</a>
                </div>
            </div>
        `;
        contenedor.innerHTML += cardHTML;
    });
}

// Evento para filtrar al escribir
buscador.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase();
    
    const filtrados = proyectos.filter(p => 
        p.titulo.toLowerCase().includes(texto) || 
        p.descripcion.toLowerCase().includes(texto)
    );
    
    renderizarProyectos(filtrados);
});

const btnTheme = document.getElementById('theme-toggle');

// Al cargar, comprobamos si ya tenía el modo oscuro activado
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    btnTheme.innerText = '☀️'; // Cambiamos el icono a sol
}

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Guardamos la preferencia y cambiamos el icono
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDark);
    
    btnTheme.innerText = isDark ? '☀️' : '🌙';
});

// Carga inicial
renderizarProyectos(proyectos);