// layout.js — shared footer injection
(function () {
    var container = document.querySelector('.container');
    if (!container) return;

    // Remove any existing .footer (in case it was left in the HTML)
    var existing = document.querySelector('.footer');
    if (existing) existing.remove();

    // Build footer
    var footer = document.createElement('div');
    footer.className = 'footer';
    footer.innerHTML =
        '<div>&copy; 2025 Viktor Ralchenko</div>' +
        '<div class="contacts">' +
            '<a href="mailto:vralchenko@gmail.com">vralchenko@gmail.com</a>' +
            '<a href="https://www.linkedin.com/in/victoralchenko/" target="_blank">LinkedIn</a>' +
        '</div>';

    container.appendChild(footer);
})();
