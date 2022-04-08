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
const modalBody = document.querySelector('.modal-body')
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

  modalTitle = createTag('h1');
  modalTitle.classList.add('font')
  modalTitle.classList.add('modal-h1');
  modalTitle.textContent = project.name;
  innerModalHeader.appendChild(modalTitle)

  const taglineDiv = createTag('div');
  taglineDiv.classList.add('tagline');
  const ul = createTag('ul');
  const li1 = createTag('li');
  li1.classList.add('title');
  const li2 = createTag('li');
  li2.classList.add('bg-dot')
  const li3 = createTag('li');
  li3.classList.add('bg-dot')
  li1.appendChild(createTagWithAttribute('a',['href', '#', project.tagline[0]]));
  li2.appendChild(createTagWithAttribute('a',['href', '#', project.tagline[1]]));
  li3.appendChild(createTagWithAttribute('a',['href', '#', project.tagline[2]]))
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  taglineDiv.appendChild(ul)
  modalBody.appendChild(taglineDiv);
  
  const imageDiv = createTag('div')
  imageDiv.classList.add('modal-img')
  const imgTag = createTagWithAttributeOnly('img', ['src',project.featuredImage])
  imageDiv.appendChild(imgTag)
  modalBody.appendChild(imageDiv)
  modalWindow.classList.remove('close')
  
}));


