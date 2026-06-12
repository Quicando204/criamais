const btn = document.getElementById('btn-tema')
const body = document.querySelector('body')
const imagemModo = document.querySelector('.imagem-modo')

// Carrega preferência guardada
if (localStorage.getItem('darkmode') === 'true') {
  body.classList.add('dark')
  if (imagemModo) imagemModo.src = '../img/escritorio-preto.webp'
}

btn.addEventListener('click', () => {
  body.classList.toggle('dark')
  const modoActivo = body.classList.contains('dark')
  localStorage.setItem('darkmode', modoActivo)
  if (imagemModo) {
    imagemModo.src = modoActivo ? '../img/escritorio-preto.webp' : '../img/escritorio.webp'
  }
})