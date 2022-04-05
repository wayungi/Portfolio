const close  =  document.querySelector('.close')
const nav = document.querySelector('.nav-holder')
const navLinks = document.querySelectorAll('.nav-link')
const hamburger = document.querySelector('.hamburger')
const modelHook =  document.querySelectorAll('.modal-hook')


const projectContent = {}


close.addEventListener('click', (e) => {
    nav.classList.add('hide')
})

hamburger.addEventListener('click', (e) => {
    nav.classList.remove('hide')
})

Array.from(navLinks).forEach(navlink => navlink.addEventListener('click', ()=>{
    nav.classList.add('hide')
}))

Array.from(modelHook).forEach(btn => btn.addEventListener('click', (e)=> {
    const children = e.target.parentElement.children

    console.log(children)

    projectContent.title = children[`${0}`].textContent
    projectContent.linkTitle = children[`${1}`].children[`${0}`].textContent
    projectContent.linkRole = children[`${1}`].children[`${1}`].textContent
    projectContent.linkYear = children[`${1}`].children[`${2}`].textContent
    //projectContent.image = 
    projectContent.paragraph = children[`${2}`].textContent
    projectContent.live = 'https://wayungi.github.io/Portfolio/'
    projectContent.sourceCode = ''

    console.log(projectContent)

    
}))
