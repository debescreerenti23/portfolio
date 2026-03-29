const proyectos = [
    { titulo: "Web book", descripcion: "Un simpatico ejemplo de como crear un relato online", link: "https://debescreerenti23.github.io/web-book/", sticker: "📖", clase: "t-personal" },
    { titulo: "Hábitos", descripcion: "Haz un seguimiento de tus hábitos diario, crea tu lista personalizada", link: "https://debescreerenti23.github.io/mis-habitos/", sticker: "📅", clase: "t-habitos" },
    { titulo: "Biblioteca", descripcion: "Tu biblioteca personal, añade los libros leídos, leyendo y por leer", link: "https://debescreerenti23.github.io/mi-biblioteca/", sticker: "📚", clase: "t-biblioteca" },
    { titulo: "Videojuego " , descripcion: "Juego de tenis de mesa futurista muy adictivo", link: "https://debescreerenti23.github.io/table-tennis/", sticker: "🕹️", clase: "t-tenis"},
    { titulo: "Metas", descripcion: "Establece tus metas, tu diario mensual de establecimiento de metas", link:"https://debescreerenti23.github.io/make-gol/", sticker: "🎯", clase: "t-goal"},
    { titulo: "Brain Videogame", descripcion: "Entrena tu mente con este rompe-cabezas", link: "https://debescreerenti23.github.io/memory-game/", sticker: "🧠", clase: "t-memory"}
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