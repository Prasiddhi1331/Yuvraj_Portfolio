const wrapper = document.createElement('div');


document.body.appendChild(wrapper);
const contactButton = document.querySelector('.contact-button');
const contactClose = document.querySelector('.contact-close');
const contactWrapper = document.querySelector('.contact-wrapper');

contactButton.addEventListener('click', () => {
  contactWrapper.classList.toggle('contact-wrapper--open')
});

contactClose.addEventListener('click', () => {
  contactWrapper.classList.remove('contact-wrapper--open')
});