const slides = document.querySelectorAll(".hero-slide");
      const dots = document.querySelectorAll(".hero-dot");
      let atual = 0;

      function irParaSlide(index) {
        slides[atual].classList.remove("ativo");
        dots[atual].classList.remove("ativo");
        atual = index;
        slides[atual].classList.add("ativo");
        dots[atual].classList.add("ativo");
      }

      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => irParaSlide(i));
      });

      setInterval(() => {
        irParaSlide((atual + 1) % slides.length);
      }, 4000);

       new Typed(".txt-animado-inicio strong", {
        strings: [
          "transforma.",
          "constrói.",
          "comunica.",
          "inspira.",
          "reinventa.",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });