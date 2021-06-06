import '../scss/index.scss'

const btnOpen = document.getElementById('btn-open')
const btnClose = document.getElementById('btn-close')
const app = document.getElementById('app')
const menu = document.getElementById('menu')

btnOpen.addEventListener('click', function () {
    menu.classList.add('-open')
})

btnClose.addEventListener('click', function () {
    menu.classList.remove('-open')
})