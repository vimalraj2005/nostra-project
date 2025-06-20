// toggle mobile menu
const burger  = document.getElementById('menu-toggle');
const menu    = document.getElementById('mobileMenu');
const close   = document.getElementById('close-btn');

burger.addEventListener('click', () => menu.classList.add('open'));
close .addEventListener('click', () => menu.classList.remove('open'));

// optional: close menu when a link is clicked
menu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () =>
     menu.classList.remove('open')));

menu.addEventListener('click', (e) => {
   close.style.display = 'block';
});

const closeBtn = document.querySelector('.advertisement-close');
const adBanner = document.querySelector('.advertisement');
const navbar = document.querySelector('.Navbar');
const Hero = document.querySelector('.hero');

closeBtn.addEventListener('click', () => {
  adBanner.style.display = 'none';
  navbar.style.top = '0';
  Hero.style.marginTop = '100px';
});



const slides = document.querySelectorAll('.slide');
const prev   = document.getElementById('prev');
const next   = document.getElementById('next');
let index = 0;

function show(i){
  slides[index].classList.remove('active'); 
  index = (i + slides.length) % slides.length; 
  slides[index].classList.add('active');  
}

prev.addEventListener('click', () => show(index - 1));
next.addEventListener('click', () => show(index + 1));

function toggleHeart(element) {
  element.classList.toggle("fa-regular");
  element.classList.toggle("fa-solid");
  element.classList.toggle("red");
}
