const header = document.querySelector('header')
const nav = document.querySelector('header nav')
const hamburger = document.querySelector('.hamburger')
const logo = document.querySelector('.logo')
const close = document.querySelector('.cerrar')
const mobileMenu = document.querySelector('.mobile-menu')
const itemsCromatografos = document.querySelector('.dropdown-items-cromatografos ul')
const downArrows = document.querySelectorAll('.down-arrow')
const upArrows = document.querySelectorAll('.up-arrow')


hamburger.addEventListener('click', () => {
  hamburger.classList.add('d-none')
  close.classList.remove('d-none')
  mobileMenu.classList.remove('d-none')
  logo.classList.add('d-none')
  header.classList.add('h-auto')
  nav.classList.add('d-block')
})

close.addEventListener('click', () => {
  close.classList.add('d-none')
  hamburger.classList.remove('d-none')
  logo.classList.remove('d-none')
  mobileMenu.classList.add('d-none')
  header.classList.remove('h-auto')
  nav.classList.remove('d-block')
})


downArrows.forEach(arrow => arrow.addEventListener('click', (evt) => {
  evt.target.classList.add('d-none')
  evt.target.parentElement.nextElementSibling.classList.remove('d-none')
  evt.target.nextElementSibling.classList.remove('d-none')
}))

upArrows.forEach(arrow => arrow.addEventListener('click', (evt) => {
  evt.target.classList.add('d-none')
  evt.target.parentElement.nextElementSibling.classList.add('d-none')
  evt.target.previousElementSibling.classList.remove('d-none')
}))



const cromatografosHTML = cromatografos.map((item,index) => {
  return `
    <li class='bullet' data-index='${index}'><a href=''>${item.nombre}</a></li>
  `
}).join('')

itemsCromatografos.innerHTML = cromatografosHTML