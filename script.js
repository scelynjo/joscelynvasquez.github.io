// Language Toggle
const langBtn = document.getElementById('lang-btn');
let currentLanguage = 'es';

// Obtener idioma guardado o usar español por defecto
function initLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'es';
    currentLanguage = savedLanguage;
    updateLanguage(savedLanguage);
    langBtn.textContent = savedLanguage === 'es' ? 'EN' : 'ES';
}

// Cambiar idioma
langBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLanguage);
    updateLanguage(currentLanguage);
    langBtn.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
});

// Actualizar todos los elementos con data-es y data-en
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-es][data-en]');
    
    elements.forEach(element => {
        if (lang === 'es') {
            element.textContent = element.getAttribute('data-es');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
}

// Smooth scroll para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer para animaciones al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos con animaciones
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
});

// Función para abrir proyectos (cuando agregues URLs)
function openProject(projectId) {
    // Aquí puedes agregar la lógica para abrir cada proyecto
    console.log('Opening project:', projectId);
}

// Efecto hover en project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
