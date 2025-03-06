var btnExp = document.getElementsByClassName('.desce-menu')
var menu = document.getElementsByClassName('.menu')

console.log(btnExp)
console.log(menu)

btnExp.addEventListener('click', expandeMenu())

function expandeMenu() {
  menu.classList.toggle('expandido')}