window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")

  setTimeout(() => {
    loader.classList.add("hide")
    setTimeout(() => {
      loader.style.display = "none"
    }, 500)
  }, 3000) // duração igual à animação da barra
})