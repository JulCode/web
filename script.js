let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
// theme switch toggle
themeSwitch.onclick = function () {
    body.classList.toggle('dark')
}
// mobile devices
function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    navigation.classList.remove('active');
    main.classList.remove('active');
}
// form
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('Fname'))
}
