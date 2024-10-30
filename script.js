const links = document.querySelectorAll('.nav a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 
        targetSection.scrollIntoView({
            behavior: 'smooth' 
        });
    });
});