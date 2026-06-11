let trilho = document.querySelector('.trilho')
let body = document.querySelector('body')
imagemModo = document.querySelector('.imagem-modo')

if (localStorage.getItem('darkmode') === 'true') {
  body.classList.add('dark')
  trilho.classList.add('dark')

  if (imagemModo) {
    imagemModo.src = '../img/escritorio-preto.webp'
  }
}

trilho.addEventListener('click', () => {
  trilho.classList.toggle('dark')
  body.classList.toggle('dark')

  const modoActivo = body.classList.contains('dark')

  // Guardar preferência
  localStorage.setItem('darkmode', modoActivo)

  // Só mudar imagem se existir nesta página
  if (imagemModo) {
    imagemModo.src = modoActivo ? '../img/escritorio-preto.webp' : '../img/escritorio.webp'
  }
})
