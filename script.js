const close = document.querySelector('.close');
const nav = document.querySelector('.nav-holder');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const form = document.querySelector('.form');
const email = document.querySelector('.email');
const errorDiv = document.querySelector('.error');
const projectBtns = document.querySelectorAll('.card  button')
const modalBtn = document.querySelector('button.modal-button')
const modalWindow = document.querySelector('.modal-window')
const modalHead = document.querySelector('.modal-header')
const innerModalHeader = document.querySelector('.inner-modal-header')
const projects = [
  {
    name:'Tonic',
    tagline:['CANOPY','Back EndDev', '2015'],
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage:'images/portfolio1.svg', 
    technologies:['html','css','javascript'], 
    live:'https://wayungi.github.io/Portfolio/',
    source:'https://github.com/wayungi/Portfolio'
  },
  
  {
    name:'Multi-Post Stories',
    tagline:['CANOPY','Back EndDev', '2015'],
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage:'images/portfolio2.svg', 
    technologies:['html','css','javascript'], 
    live:'https://wayungi.github.io/Portfolio/',
    source:'https://github.com/wayungi/Portfolio'
  },

  {
    name:'Tonic',
    tagline:['CANOPY','Back EndDev', '2015'],
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage:'images/portfolio3.svg', 
    technologies:['html','css','javascript'], 
    live:'https://wayungi.github.io/Portfolio/',
    source:'https://github.com/wayungi/Portfolio'
  },

  {
    name:'Multi-Post Stories',
    tagline:['CANOPY','Back EndDev', '2015'],
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage:'images/portfolio4.svg', 
    technologies:['html','css','javascript'], 
    live:'https://wayungi.github.io/Portfolio/',
    source:'https://github.com/wayungi/Portfolio'
  }


]

close.addEventListener('click', () => {
  nav.classList.add('hide');
});

hamburger.addEventListener('click', () => {
  nav.classList.remove('hide');
});

Array.from(navLinks).forEach((navlink) => navlink.addEventListener('click', () => {
  nav.classList.add('hide');
}));

form.addEventListener('submit', (e) => {
  const emailRegex = new RegExp('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/');

  if (!email.value.match(emailRegex)) {
    e.preventDefault();
    errorDiv.innerText = 'Email address must be valid and in lowercase';
  }
});

Array.from(projectBtns).forEach((projectBtn) =>projectBtn.addEventListener('click', (e) => {
  const project = projects[+(e.target.name)]

 
  modalTitle = createTag('h1')
  modalTitle.classList.add('modal-h1')
  modalTitle.textContent = project.name;
  innerModalHeader.appendChild(modalTitle)



  modalWindow.classList.remove('close')
  
}));

function createTag(tagname){
  const elem = document.createElement(tagname)
  //console.log(elem)
  return elem
}

modalBtn.addEventListener('click', () => {
  modalWindow.classList.add('close');
  innerModalHeader.innerHTML = '';
  

})
