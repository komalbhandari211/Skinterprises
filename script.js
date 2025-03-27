

    // const galleryItems = document.querySelectorAll('.gallery-item');
    // const modal = document.getElementById('image-modal');
    
    // if (modal) {
    //     const modalImg = document.getElementById('modal-image');
    //     const modalCaption = document.getElementById('modal-caption');
    //     const closeBtn = document.querySelector('.close');

    //     window.openModal = function(element) {
    //         const img = element.querySelector('img');
    //         const caption = element.querySelector('.image-overlay p');
            
    //         modal.style.display = 'block';
    //         modalImg.src = img.src;
    //         modalCaption.textContent = caption ? caption.textContent : '';
    //     }

    //     if (closeBtn) {
    //         closeBtn.onclick = function() {
    //             modal.style.display = 'none';
    //         }
    //     }

    //     window.onclick = function(event) {
    //         if (event.target === modal) {
    //             modal.style.display = 'none';
    //         }
    //     }
    // }

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const message = this.message.value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields');
                return;
            }
        
            alert('Message sent successfully! We will get back to you soon.');
            contactForm.reset();


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        burger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
});