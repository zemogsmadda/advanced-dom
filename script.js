'use strict';

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

const nav = document.querySelector(`.nav`);

///////////////////////////////////////
// Modal window
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
// Lecture edits

//Button scrolling 
btnScrollTo.addEventListener(`click`, function(e){
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({behavior:`smooth`});
});

//Link delegation
document.querySelector(`.nav__links`).addEventListener(`click`, function(e){
  e.preventDefault();

  if(e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({
      behavior: `smooth`
  });
};
});

//Tabbed content
tabsContainer.addEventListener(`click`, function(e){
  const clicked = e.target.closest(`.operations__tab`);
 
  if(!clicked) return;

  tabs.forEach(function (t){
    return t.classList.remove(`operations__tab--active`)
  });
  tabsContent.forEach(function(c){
    return c.classList.remove(`operations__content--active`);
  })

  clicked.classList.add(`operations__tab--active`);

  document.querySelector
  (`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
})

//Navigation Hover
const handleHover = function(e, opacity) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    
    const siblings = link
      .closest(`.nav`)
      .querySelectorAll(`.nav__link`);

    const logo = link
      .closest(`.nav`)
      .querySelector(`img`);

    siblings.forEach(function(el){
      if (el !== link) el.style.opacity = opacity; 
    })
    logo.style.opacity = opacity;
  }
}

nav.addEventListener(`mouseover`, function(e){
  handleHover(e, 0.5);
})

nav.addEventListener(`mouseout`, function(e){
  handleHover(e, 1);
})

///////////////////////////////////////
// Selecting, creating, and deleting elements
/*
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
// header.before(message); //before the header element
// header.after(message); //after the header element

//Delete elements
document.querySelector(`.btn--close-cookie`).addEventListener(`click`, function(){
  message.remove();
  //Old way to do it
  //message.parentElement.removeChild(message);
});
*/

///////////////////////////////////////
// Styles, attributes, and classes
/*
//Styles 
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//Get computed style will show the actual measurement such as 30px but it is a string
//Number.parsefloat will separate the px from the number 
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

//Everywhere in the document where color primary color is, it will get  changed to orangered
document.documentElement.style.setProperty(`--color-primary`, `orangered`);

//Attributes
const logo = document.querySelector(`.nav__logo`);
//You can access these property attributes like objects
//Only standard properties are going to be read
console.log(logo.alt, logo.src);
console.log(logo.className);

//Set Attributes
logo.alt = `Beautiful minimalist logo`;

//Set and console non standard attributes
console.log(logo.getAttribute(`designer`));
logo.setAttribute(`company`, `bankist`);

const link = document.querySelector(`.nav__link--btn`);
console.log(link.href);
console.log(link.getAttribute(`href`));

//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add(`c`);
logo.classList.remove(`c`);
logo.classList.toggle(`c`);
logo.classList.contains(`c`);

//Dont use!! it will override the other classes and can only use one class
logo.className =`Paul`;
*/

///////////////////////////////////////
// Smooth scrolling
/*

//window.pageYOffset = distance between the button's original position and bottom of screen
//s1coords = distanc between the top of the page and bottom of the element

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

//.getBoundingClientRect(); will show the coordinates of selected elements relative to viewport
btnScrollTo.addEventListener(`click`, function(e){
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log(`current scroll (x/y)`, window.pageXOffset, window.pageYOffset);

  // console.log(`height and width of vp`, document.documentElement.clientHeight,
  //                                       document.documentElement.clientWidth); 

  //Scrolling
  //Current position + current scroll
  // window.scrollTo(s1coords.left + window.pageXOffset, 
  //                 s1coords.top + window.pageYOffset);

  //Better way to do it
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });

  //More modern way
  section1.scrollIntoView({behavior:`smooth`});

  // console.log(s1coords.top);
  // console.log(window.pageYOffset);
});
*/

///////////////////////////////////////
// Types of events and event handlers
/*
const h1 = document.querySelector(`h1`);

const alertH1 = function(e){
  alert(`addEventListener: Great! You are reading the heading`);

  //Reason why we want to use the add event listener
  //You can use more than one function
  //This will remove the listener making it only a one time use
  h1.removeEventListener(`mouseenter`, alertH1);
};

//Event listener attachment 1
//More modern way
h1.addEventListener(`mouseenter`, alertH1 );

//Event listener attachment 2
// h1.onmouseenter = function(e){
//   alert(`addEventListener: Great! You are reading the heading`);
// };

// The eventlistener will be removed after 3s
// setTimeout(function(){
//   return h1.removeEventListener(`mouseenter`, alertH1)
// }, 3000);
*/

///////////////////////////////////////
// Event propagation in practice
/*
// rgb(255, 255, 255);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = function() {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
}

console.log(randomColor(0, 255)); 

//Will change the bottom two when clicked
document.querySelector(`.nav__link`).addEventListener(`click`, function(e){
  this.style.backgroundColor = randomColor()
  console.log(`link`, e.target, e.currentTarget);

  //How to stop event propagation
  // e.stopPropagation();
})
//Will only change the bottom and itself
document.querySelector(`.nav__links`).addEventListener(`click`, function(e){
  this.style.backgroundColor = randomColor()
  console.log(`container`, e.target, e.currentTarget);
})
//Will only change itself
document.querySelector(`.nav`).addEventListener(`click`, function(e){
  this.style.backgroundColor = randomColor()
  console.log(`nav`, e.target, e.currentTarget);
}, true) //When set to true the element will start listening from the DOM instead of bubbling up
*/

///////////////////////////////////////
// Event delegation: implementing page navigation

//Page navigation
//Will implement smooth scroll on all three of the nav-links
//DRY example
//Not a good idea for large scale
//If this was added to 10,000 elements, it would have to run through 10,000 forEach and affect performance
// document.querySelectorAll(`.nav__link`).forEach(function(el){
//   el.addEventListener(`click`, function(e){
//     e.preventDefault();

//     const id = this.getAttribute(`href`);
//     document.querySelector(id).scrollIntoView({
//       behavior: `smooth`
//     });
//   });
// });

//Event delegation 
//Adding the event listener to a common parent making use of bubbling 

//1. Add event listener to a common parent element
//2. In the event listener, determine what element originated the event

// document.querySelector(`.nav__links`).addEventListener(`click`, function(e){
//   e.preventDefault();

//   //How to ignore clicks that werent the navigation links
//   if(e.target.classList.contains(`nav__link`)) {
//     const id = e.target.getAttribute(`href`);
//     document.querySelector(id).scrollIntoView({
//       behavior: `smooth`
//   });
// };
// });

///////////////////////////////////////
// Dom traversing
/*
const h1 = document.querySelector(`h1`);

// Going downwards: selecting child elements
console.log(h1.querySelectorAll(`.highlight`));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = `white`;
h1.lastElementChild.style.color = `orangered`;

//Going upwards: selecting parents
console.log(h1.parentNode);
console.log(h1.parentElement);

//Will find the closest parent
h1.closest(`.header`).style.background = `var(--gradient-secondary)`;
h1.closest(`h1`).style.background = `var(--gradient-primary)`;

//Going sideways: selecting siblings
console.log(h1.previousElementSibling); 
console.log(h1.nextElementSibling); 

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//Will go up to parent then show all of that parent's children including itself
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if(el !== h1) el.style.transform = `scale(0.5)`;
})
*/

///////////////////////////////////////
// Building a tabbed component
/*
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

tabsContainer.addEventListener(`click`, function(e){
  const clicked = e.target.closest(`.operations__tab`);
  console.log(clicked);

  //Guard clause
  //if nothing is clicked it will return
  //More modern
  if(!clicked) return;

  //Will make all tabs go down
  tabs.forEach(function (t){
    return t.classList.remove(`operations__tab--active`)
  });
  tabsContent.forEach(function(c){
    return c.classList.remove(`operations__content--active`);
  })

  //Active tab
  clicked.classList.add(`operations__tab--active`);
  
  //Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add(`operations__content--active`);
})
*/

///////////////////////////////////////
// Passing arguments to event handlers

//Menu fade animation

// const nav = document.querySelector(`.nav`);
// nav.addEventListener(`mouseover`, function(e){
//   if (e.target.classList.contains(`nav__link`)) {
//     const link = e.target;
//     const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
//     const logo = link.closest(`.nav`).querySelector(`img`);

//     siblings.forEach(function(el){
//       if (el !== link) el.style.opacity = 0.5; 
//     })
//     logo.style.opacity = 0.5;
//   }
// })

// nav.addEventListener(`mouseout`, function(e){
//   if (e.target.classList.contains(`nav__link`)) {
//     const link = e.target;
//     const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
//     const logo = link.closest(`.nav`).querySelector(`img`);

//     siblings.forEach(function(el){
//       if (el !== link) el.style.opacity = 1; 
//     })
//     logo.style.opacity = 1;
//   }
// })

//Refactored
// const handleHover = function(e, opacity) {
//   if (e.target.classList.contains(`nav__link`)) {
//     const link = e.target;
//     const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
//     const logo = link.closest(`.nav`).querySelector(`img`);

//     siblings.forEach(function(el){
//       if (el !== link) el.style.opacity = opacity; 
//     })
//     logo.style.opacity = opacity;
//   }
// }

// const nav = document.querySelector(`.nav`);
// nav.addEventListener(`mouseover`, function(e){
//   handleHover(e, 0.5);
// })

// nav.addEventListener(`mouseout`, function(e){
//   handleHover(e, 1);
// })

