const close  =  document.querySelector('.close')
const nav = document.querySelector('.nav-holder')
const navLinks = document.querySelectorAll('.nav-link')

close.addEventListener('click', (e) => {
    nav.classList.add('hide')

})

Array.from(navLinks).forEach(navlink => navlink.addEventListener('click', ()=>{
    nav.classList.add('hide')
}))

console.log(close)
console.log(nav)