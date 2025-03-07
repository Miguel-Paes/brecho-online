var btnExp = document.getElementsByClassName('desce-menu')
var menu = document.getElementsByClassName('menu')

console.log(btnExp)
console.log(menu)

for (let i = 0; i < btnExp.length; i++) {
  btnExp.addEventListener('click', expandeMenu())
}

function expandeMenu() {
  for (let i = 0; i < menu.length; i++)
    menu[i].classList.toggle('.expandido')
}