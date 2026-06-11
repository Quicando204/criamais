// FILTROS
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = e => {
   document.querySelector(".filter_buttons .active").classList.remove('active');
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add('hide');
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
            card.classList.remove('hide');
        }
    });
};

filterButtons.forEach(button => button.addEventListener('click', filterCards));

// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
let cards = [];
let current = 0;

function abrirLightbox(index) {
    current = index;
    const visiveis = [...filterableCards].filter(c => !c.classList.contains('hide'));
    cards = visiveis;
    lbImg.src = visiveis[index].querySelector('img').src;
    lightbox.classList.add('open');
}

function fecharLightbox() {
    lightbox.classList.remove('open');
}

function navegar(dir) {
    current = (current + dir + cards.length) % cards.length;
    lbImg.src = cards[current].querySelector('img').src;
}

// Clique nas fotos
filterableCards.forEach((card, i) => {
    card.addEventListener('click', () => {
        const visiveis = [...filterableCards].filter(c => !c.classList.contains('hide'));
        const indexVisivel = visiveis.indexOf(card);
        abrirLightbox(indexVisivel);
    });
});

// Teclado
document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowRight') navegar(1);
    if (e.key === 'ArrowLeft') navegar(-1);
    if (e.key === 'Escape') fecharLightbox();
});