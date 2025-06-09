 function showPage(index) {
    window.location.href = index + '.html';
}
function showPage(gallery) {
    window.location.href = gallery + '.html';
}
function showPage(kcjunior) {
    window.location.href = kcjunior + '.html';
}

        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
   // FAQ Toggle Functionality
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current FAQ
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    });