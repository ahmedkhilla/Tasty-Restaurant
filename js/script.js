//! Declarations
const menuSection = document.querySelector('.menu-section');
const closeBtn = document.querySelector('.close-icon');
const menuBtn = document.querySelector('.burger-menu')
const menuText = document.querySelector('.hidden-text')
// console.log(menuBtn, closeBtn, menuSection);

//! Nav-Menu Function 
menuBtn.addEventListener('click', () => menuSection.classList.add('hidden'));
menuText.addEventListener('click', () => menuSection.classList.add('hidden'))

closeBtn.addEventListener('click', () => menuSection.classList.remove('hidden'));
