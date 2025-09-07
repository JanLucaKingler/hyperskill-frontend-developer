document.addEventListener('DOMContentLoaded', () => {
    const projectDetails = {
        flashcards: `
            <h3>Flashcards</h3>
            <p>This project helps you study using flashcards. Built with HTML, CSS, and JavaScript.</p>
            <p><a href="https://example.com/flashcards" target="_blank">View Project</a></p>
        `,
        piano: `
            <h3>Virtual Piano</h3>
            <p>A virtual piano app that allows users to play notes using keyboard or mouse. Made with JavaScript and CSS animations.</p>
            <p><a href="https://example.com/piano" target="_blank">View Project</a></p>
        `
    };

    const openButtons = document.querySelectorAll('.open-window');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closeBtn = document.querySelector('.close-btn');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const project = button.getAttribute('data-project');
            popupText.innerHTML = projectDetails[project] || "<p>Details not found.</p>";
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('show');
        hamburger.innerHTML = isOpen ? '&times;' : '&#9776;';
    });
});
