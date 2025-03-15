// Modo Oscuro
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleDarkModeButton.innerHTML = moonIcon;
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleDarkModeButton.innerHTML = sunIcon;
    }
});

// Validación del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const anniversaryDate = document.getElementById("anniversaryDate").value;
    const correctDate = "2025-01-15"; // Fecha correcta en formato AAAA-MM-DD

    if (anniversaryDate === correctDate) {
        localStorage.setItem("anniversaryDate", anniversaryDate);
        alert("¡Bienvenida, mi amor! ❤️");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
    }
});

// Animación de los corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 200);

document.addEventListener('DOMContentLoaded', function () {
    if (typeof window.driver === 'undefined' || typeof window.driver.js === 'undefined') {
        console.error('Driver.js no está cargado.');
        return;
    }

    if (localStorage.getItem('tourVisto') === 'true') return;

    const driver = window.driver.js.driver;
    const driverObj = driver({
        showProgress: true,
        showButtons: ['next', 'previous'],
        steps: [
            {
                element: '#toggleDarkMode',
                popover: {
                    title: 'Modo Oscuro/Claro',
                    description: 'Haz clic aquí para cambiar entre el modo oscuro y claro.',
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '#anniversaryDate',
                popover: {
                    title: 'Fecha de Aniversario',
                    description: 'Ingresa la fecha de nuestro aniversario para continuar.',
                    side: 'top',
                    align: 'center'
                }
            },
            {
                element: '#loginForm button',
                popover: {
                    title: 'Ingresar',
                    description: 'Haz clic aquí para acceder a la página especial ❤️.',
                    side: 'top',
                    align: 'center'
                }
            }
        ]
    });

    driverObj.drive();
    localStorage.setItem('tourVisto', 'true');
});
