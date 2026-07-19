const btn = document.getElementById("btn-enviar");
const erro = document.getElementById("form-erro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const msg = document.getElementById("msg");

btn.addEventListener("click", function () {
  // Reset erros
  [nome, email, msg].forEach((c) => (c.style.borderColor = ""));
  erro.style.display = "none";

  let valido = true;

  if (!nome.value.trim()) {
    nome.style.borderColor = "#e55";
    valido = false;
  }
  if (!telefone.value.trim()) {
    telefone.style.borderColor = "#e55";
    valido = false;
  }
  if (!msg.value.trim()) {
    msg.style.borderColor = "#e55";
    valido = false;
  }

  if (!valido) {
    erro.style.display = "block";
    return;
  }

  // Monta a mensagem
  const mensagem = `Olá CRIA MAIS! 👋

*Nome:* ${nome.value.trim()}
*Email:* ${email.value.trim() || "Não informado"}
*Telefone:* ${telefone.value.trim()}

*Mensagem:*
${msg.value.trim()}`;

  // Sucesso visual
  btn.textContent = "✓ A redirecionar para WhatsApp...";
  btn.style.background = "#25D366";
  btn.disabled = true;

  // Abre WhatsApp
  const numero = "244956112235";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  setTimeout(() => {
    window.open(url, "_blank");
    // Reset botão
    btn.textContent = "Enviar Mensagem →";
    btn.style.background = "";
    btn.disabled = false;
  }, 1000);
});
