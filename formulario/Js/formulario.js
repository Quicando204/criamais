window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")

  setTimeout(() => {
    loader.classList.add("hide")
    setTimeout(() => {
      loader.style.display = "none"
    }, 500)
  }, 3000) // duração igual à animação da barra
})


  // Número WhatsApp da CRIA+
      const WHATSAPP_NUMBER = "244936055943";

      function enviarWhatsApp() {
        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const email = document.getElementById("email").value.trim();
        const espaco = document.getElementById("espaco").value;
        const area = document.getElementById("area").value;
        const orcamento = document.getElementById("orcamento").value;
        const prazo = document.getElementById("prazo").value;
        const descricao = document.getElementById("descricao").value.trim();

        if (!nome) {
          alert("Por favor, introduza o seu nome.");
          return;
        }
        if (!telefone) {
          alert("Por favor, introduza o seu telefone.");
          return;
        }
        if (!espaco) {
          alert("Por favor, seleccione o tipo de espaço.");
          return;
        }

        const divisoes =
          [...document.querySelectorAll(".tipo-item input:checked")]
            .map((cb) => cb.value)
            .join(", ") || "Não especificado";

        let msg = `🏠 *PEDIDO DE ORÇAMENTO — CRIA+*\n\n`;
        msg += `*👤 CONTACTO*\n`;
        msg += `• Nome: ${nome}\n`;
        msg += `• Telefone: ${telefone}\n`;
        if (email) msg += `• Email: ${email}\n`;
        msg += `\n*📐 PROJECTO*\n`;
        msg += `• Tipo de espaço: ${espaco}\n`;
        msg += `• Divisões: ${divisoes}\n`;
        if (area) msg += `• Área: ${area} m²\n`;
        if (orcamento) msg += `• Orçamento: ${orcamento}\n`;
        if (prazo) msg += `• Prazo: ${prazo}\n`;
        if (descricao) msg += `\n*📝 DESCRIÇÃO*\n${descricao}\n`;
        msg += `\n_Enviado via formulário do site CRIA+_`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");

        document.getElementById("form-area").style.display = "none";
        document.getElementById("success-area").style.display = "block";
      }