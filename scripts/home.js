var btnExp = document.getElementById('#btn-expandir')
var menu = document.getElementById('#top-menu')

btnExp.addEventListener('click', function () {
  menu.classList.toggle('.expandido')
})