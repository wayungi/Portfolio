const close = document.querySelector('.close');
const nav = document.querySelector('.nav-holder');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const form = document.querySelector('.form');
const email = document.querySelector('.email');
const errorDiv = document.querySelector('.error');

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
  let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

  if(!email.value.match(emailRegex)){
      e.preventDefault();
      errorDiv.innerText = 'Email address must be valid and in lowercase'
  }
})
