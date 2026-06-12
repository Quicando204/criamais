
// ============================================
// MENU HAMBURGER — todas as páginas
// ============================================
const burguer = document.getElementById("burguer");
const navMenu = document.getElementById("menu"); // renomeado para não conflituar
const icon    = document.getElementById("icon");

if (burguer) {
  burguer.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    if (icon) {
      icon.textContent = navMenu.classList.contains("show") ? "close" : "menu";
    }
  });
}

// ============================================
// ANIMAÇÕES SCROLL — todas as páginas
// ============================================
const Mobile = window.innerWidth <= 768;

ScrollReveal({ reset: true }).reveal(".efeito-img-topo", {
  distance: "90px",
  duration: 2000,
  delay: 1000,
  origin: Mobile ? "top" : "left",
});

ScrollReveal().reveal(".efeito-txt-topo", {
  distance: "90px",
  duration: 2000,
  delay: 2200,
  origin: Mobile ? "bottom" : "right",
});

// ============================================
// APENAS NA PÁGINA SOBRE NÓS
// ============================================
const paginaSobre = document.getElementById("sobre");

if (paginaSobre) {

  // Menu hamburger diferente do sobre
  const botaoMenu = document.getElementById("botao-menu");
  if (botaoMenu) {
    botaoMenu.addEventListener("click", () =>
      navMenu.classList.toggle("ativo")
    );
  }

  // Contadores 
 let contadoresIniciados = false;

ScrollReveal().reveal(".estatisticas", {
  duration: 2000,
  distance: "90px",
  origin: Mobile ? "left" : "top",

  beforeReveal: function () {
    if (contadoresIniciados) return;
    contadoresIniciados = true;

    const percentagem = document.getElementById("numero-percentagem");
    if (percentagem) {
      let contagem = 0;

      const timer1 = setInterval(() => {
        contagem++;
        percentagem.textContent = `${contagem}%`;

        if (contagem >= 100) {
          clearInterval(timer1);
        }
      }, 45);
    }

    const numeroProjeto = document.getElementById("numero-projeto");
    if (numeroProjeto) {
      let contagem2 = 0;

      const timer2 = setInterval(() => {
        contagem2++;
        numeroProjeto.textContent = `+${contagem2} Projetos`;

        if (contagem2 >= 150) {
          clearInterval(timer2);
        }
      }, 30);
    }
  }
});

  // Scroll reveal específico do sobre
  
  ScrollReveal().reveal(".efeito-txt-topo", {
    duration: 2000,
    distance: "90px",
    delay: 1000,
    origin: "left",
  });
  ScrollReveal().reveal(".efeito-img-topo", {
    duration: 2000,
    distance: "90px",
    origin: "top",
  });

  
  
}

var waStarted = false;
function waOpen() {
  var chat = document.getElementById('wa-chat');
  chat.style.display = chat.style.display === 'none' ? 'block' : 'none';
  if (!waStarted && chat.style.display === 'block') {
    waStarted = true;
    waSequence();
  }
}
function waShowMsg(id) {
  return new Promise(function(res) {
    var typing = document.getElementById('wa-typing');
    document.getElementById('wa-status').textContent = 'a digitar...';
    typing.style.display = 'block';
    setTimeout(function() {
      typing.style.display = 'none';
      document.getElementById(id).style.display = 'block';
      res();
    }, 1400);
  });
}
async function waSequence() {
  await waShowMsg('wa-m1');
  await new Promise(r => setTimeout(r, 500));
  await waShowMsg('wa-m2');
  await new Promise(r => setTimeout(r, 500));
  await waShowMsg('wa-m3');
  document.getElementById('wa-status').textContent = 'online';
}


// SCROLL REVEAL — Projetos
const paginaProjeto = document.querySelector('.filterable_cards');

if (paginaProjeto) {
    ScrollReveal().reveal('.card', {
        distance: '40px',
        duration: 600,
        delay: 150,
        origin: 'bottom',
        interval: 100,
        reset: false
    });
}

ScrollReveal().reveal(".cta-banner", {
  duration: 2000,
  origin: "top",
  delay:1000
})

const paginaDepoimento = document.querySelector('.cards');
if(paginaDepoimento){
ScrollReveal().reveal(".cards", {
        distance: '40px',
        duration: 1000,
        delay: 550,
        origin: 'bottom',
        interval: 900,
        reset: false
})
}

ScrollReveal().reveal("#inicio-img", {
  duration: 2000,
  origin: "right",
  delay:1000,
  distance: "90px"
})

ScrollReveal().reveal(".servicos-wrapper", {
  duration:2000,
  origin:"top",
  distance:"90px"
})
