//! Declarations
const menuSection = document.querySelector('.menu-section');
const closeBtn = document.querySelector('.close-icon');
const menuBtn = document.querySelector('.burger-menu');
const menuText = document.querySelector('.hidden-text');
let preIcon = document.querySelector('.before-icon');
let afterIcon = document.querySelector('.after-icon');
// let slides = document.getElementsByClassName("slider");
let slideIndex = 1;

// console.log(menuBtn, closeBtn, menuSection);

//! Nav-Menu Function 
menuBtn.addEventListener('click', () => menuSection.classList.add('hidden'));
menuText.addEventListener('click', () => menuSection.classList.add('hidden'))
closeBtn.addEventListener('click', () => menuSection.classList.remove('hidden'));

//! slider function
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slider");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}
//! slider addEventListener
preIcon.addEventListener('click', () => {
  plusSlides(-1);
})
afterIcon.addEventListener('click', () => {
  plusSlides(1)
})

