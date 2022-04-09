const close = document.querySelector('.close');
const nav = document.querySelector('.nav-holder');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const form = document.forms['contactForm'];
// const email = document.querySelector('.email');
const errorDiv = document.querySelector('.error');


console.log(form.elements)



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
  e.preventDefault();
  errorDiv.textContent = '';
  Array.from(form.elements).forEach((element) => {
    if (!element.validity.valid) {
      if (element.validity.patternMismatch) {
        errorDiv.textContent = 'Please use only lowercase characters.';
      }
    }
  });
  if (form.reportValidity()) {
    form.submit();
  }

});



