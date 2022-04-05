const close  =  document.querySelector('.close')
const nav = document.querySelector('.nav-holder')
const navLinks = document.querySelectorAll('.nav-link')
const hamburger = document.querySelector('.hamburger')

close.addEventListener('click', (e) => {
    nav.classList.add('hide')
})

hamburger.addEventListener('click', (e) => {
    nav.classList.remove('hide')
})

Array.from(navLinks).forEach(navlink => navlink.addEventListener('click', ()=>{
    nav.classList.add('hide')
}))
