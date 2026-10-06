document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.products-carousel');
    const cards = document.querySelectorAll('.product-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dots = document.querySelectorAll('.dot');

    if (!track || cards.length === 0) return;

    let currentIndex = 0;

    
    function updateCarousel(index) {
        
        if (index < 0) {
            currentIndex = cards.length - 1;
        } else if (index >= cards.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

       
        const amountToMove = currentIndex * 100;
        track.style.transform = `translateX(-${amountToMove}%)`;

       
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    
    nextBtn?.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });

    
    prevBtn?.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });

    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Podešavanje telefonskog broja (Format sa pozivnim brojem, npr. 381600000000)
    const phoneNumber = '381693520303';

    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCallBtn = document.getElementById('modalCallBtn');
    const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    const openButtons = document.querySelectorAll('.open-modal-btn');

    // Funkcija za otvaranje modala
    function openModal(button) {
        const title = button.getAttribute('data-title');
        const imageSrc = button.getAttribute('data-image');
        const description = button.getAttribute('data-desc');

        // Popunjavanje sadržaja u modalu
        modalTitle.textContent = title;
        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalDescription.textContent = description;

        // Postavljanje poziva na broj
        modalCallBtn.href = `tel:+${phoneNumber}`;

        // Generisanje WhatsApp poruke sa ugradjenim imenom proizvoda
        const whatsappMessage = encodeURIComponent(`Zdravo, zainteresovan/a sam za ovaj proizvod: ${title}.`);
        modalWhatsappBtn.href = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Prikazivanje modala
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Onemogućava skrolovanje pozadine
    }

    // Funkcija za zatvaranje modala
    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Vraća skrolovanje pozadine
    }

    // Klik na bilo koje "Saznajte više" dugme
    openButtons.forEach(button => {
        button.addEventListener('click', () => openModal(button));
    });

    // Zatvaranje na klik "X" ili klik van pop-up prozora (na overlay)
    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);

    // Zatvaranje pritiskom na dugme ESC na tastaturi
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});