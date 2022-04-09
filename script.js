const close = document.querySelector('.close');
const nav = document.querySelector('.nav-holder');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const form = document.querySelector('.form');
const email = document.querySelector('.email');
const errorDiv = document.querySelector('.error');
const projectBtns = document.querySelectorAll('.card  button');
const modalBtn = document.querySelector('button.modal-button');
const modalWindow = document.querySelector('.modal-window');
const modalHead = document.querySelector('.modal-header');
const innerModalHeader = document.querySelector('.inner-modal-header');
const modalBody = document.querySelector('.modal-body');
const overlay = document.querySelector('.blue-bg');
const docBody = document.querySelector('body')
console.log(docBody)
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
  taglineDiv.appendChild(ul);
  modalBody.appendChild(taglineDiv);

  const imageDiv = createTag('div');
  imageDiv.classList.add('modal-img');
  const imgTag = createTagWithAttributeOnly('img', ['src',project.featuredImage]);
  imageDiv.appendChild(imgTag);
  modalBody.appendChild(imageDiv);

  //create the modal paragraph
  const paragraph = createTag('p');
  paragraph.textContent = project.description;
  paragraph.classList.add('description')
  modalBody.appendChild(paragraph);

  //create the technolgy div
  const techDiv  =  createTag('div');
  techDiv.classList.add('technologies');
  const ul2 = createTag('ul');
  ul2.classList.add('tech-list');
  const li4 = createTag('li')
  li4.classList.add('tech-item')
  const li5 = createTag('li')
  li5.classList.add('tech-item')
  const li6 = createTag('li')
  li6.classList.add('tech-item')
  li4.appendChild(createTagWithAttribute('a',['href', '#', project.technologies[0]]));
  li5.appendChild(createTagWithAttribute('a',['href', '#', project.technologies[1]]));
  li6.appendChild(createTagWithAttribute('a',['href', '#', project.technologies[2]]))
  ul2.appendChild(li4);
  ul2.appendChild(li5);
  ul2.appendChild(li6);
  techDiv.appendChild(ul2);
  modalBody.appendChild(techDiv);

  //add see source & live links
  const extDiv = createTag('div');
  extDiv.classList.add('ext-div');
  const ul3 = createTag('ul');
  ul3.classList.add('ext-list');
  const li7 = createTag('li');
  li7.classList.add('ext-item', 'live')
  const li8 = createTag('li');
  li8.classList.add('ext-item', 'source')
  li7.appendChild(createTagWithAttribute('a',['href', project.live, 'See live']));
  li8.appendChild(createTagWithAttribute('a',['href', project.source, 'See Source']));
  ul3.appendChild(li7);
  ul3.appendChild(li8);
  extDiv.appendChild(ul3);
  modalBody.appendChild(extDiv);





  docBody.classList.add('still');
  overlay.classList.add('active');
  modalWindow.classList.remove('close');
  
}));

window.addEventListener('load', () => {
  overlay.classList.remove('active');
  modalWindow.classList.add('close');
  docBody.classList.remove('still');

})

function createTag(tagname){
  const elem = document.createElement(tagname)
  return elem
}

function createTagWithAttribute(tagName, [attribute, value, text]){
  const tag = document.createElement(tagName);
  tag.setAttribute(attribute, value)
  tag.textContent = text
  return tag
}

function createTagWithAttributeOnly(tagName, [attribute, value]){
  const tag = document.createElement(tagName);
  tag.setAttribute(attribute, value)
  return tag
}

modalBtn.addEventListener('click', () => {
  modalWindow.classList.add('close');
  overlay.classList.remove('active');
  docBody.classList.remove('still');

  innerModalHeader.innerHTML = '';
  modalBody.innerHTML = '';
  
})