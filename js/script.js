document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-down');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`; // Delay each element by 0.1s
        el.classList.add('slide-down');
    });
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference or default to light mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Toggle Light Mode';
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isNowDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isNowDarkMode);
        darkModeToggle.textContent = isNowDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });
});