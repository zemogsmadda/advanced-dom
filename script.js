'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener
  (`click`, openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Selecting, creating, and deleting elements

//Will select the whole body, anything enclosed in the html
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(`.header`);
const allSection = document.querySelectorAll(`.section`); //Use if you want to select multiple elements
console.log(allSection);

document.getElementById(`#section--1`);
const allButtons = document.getElementsByTagName(`button`);
console.log(allButtons);

//Will select the class name in the css
//Does not need '.class-name' 
console.log(document.getElementsByClassName(`btn`));

//Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
//message.text-content = `We use cookies for improved experience and analytics.`;
message.innerHTML = `We use cookies for improved experience and analytics. <button class = "btn btn--close-cookie"> Got it! </button>`;

//can only exist in one place at a time
header.prepend(message); //first child
header.append(message); //last child
// how to copy it into other parts of the dom
// header.append(message.cloneNode(true));
header.before(message); //before the header element
header.after(message); //after the header element

//Delete elements
document.querySelector(`.btn--close-cookie`).addEventListener(`click`, function(){
  message.remove();
})
