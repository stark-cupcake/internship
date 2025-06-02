function showPage(courses) {
    window.location.href = courses + '.html';
}
function showPage(gallery) {
    window.location.href = gallery + '.html';
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.menu-toggle');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}