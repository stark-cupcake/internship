function showPage(courses) {
    window.location.href = courses + '.html';
}
function showPage(index) {
    window.location.href = index + '.html';
}
function showPage(kcjunior) {
    window.location.href = kcjunior + '.html';
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.menu-toggle');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}