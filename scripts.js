function openPage(pageName, e) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName('tab-content');
  tabLinks = document.getElementsByClassName('tab-links');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
    tabLinks[i].classList.remove('tab-active');
  }
  document.getElementById(pageName).style.display = 'block';
  e.classList.add('tab-active');
}

document.getElementById('default-open').click();

const buttons = document.querySelectorAll('[data-animation="ripple"]');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    let x = e.clientX;
    let y = e.ClientY;

    let ripple = document.createElement('span');

    ripple.className = 'ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.parentNode.removeChild(ripple);
    }, 500);
  });
});

const plus = document.querySelector('.plus');

const plusOnMouseOver = () => {
  plus.innerHTML = 'Read More';
};

const plusOnMouseOut = () => {
  plus.innerHTML = '+';
};

const navBar = document.getElementById('nav-bar');

window.onscroll = () => {
  if (window.pageYOffset >= 400) {
    document.getElementsByClassName('to-top')[0].style.display = 'block';
    document.getElementsByClassName('to-top')[0].style.opacity = '1';
  }
  if (window.pageYOffset >= 30) {
    navBar.style.background = 'white';
    navBar.style.margin = '0';
    navBar.style.width = '100vw';
    navBar.style.padding = '0.5rem 0.5rem';
  }
  if (window.pageYOffset <= 30) {
    navBar.style.background = 'none';
    navBar.style.margin = '1rem 1rem';
    navBar.style.width = '92.5%';
  }
  if (window.pageYOffset <= 100) {
    document.getElementsByClassName('to-top')[0].style.display = 'none';
  }
};

document.getElementsByClassName('to-top')[0].onmousedown = () => {
  document.getElementsByTagName('body')[0].animate({ scrollTop: 0 }, 1000);
};

const navLinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');
const x = document.getElementById('x');
const navItems = document.getElementsByClassName('nav-items');
const arrow = document.getElementsByClassName('fa-long-arrow-alt-right')[0];
const d = document.getElementsByClassName('d')[0];
const dTwo = document.getElementsByClassName('d-two')[0];

const openNav = () => {
  if (navLinks.style.display === 'none') {
    navLinks.style.display = 'block';
    hamburger.style.display = 'none';
    x.style.display = 'block';
    navBar.style.flexDirection = 'column';
    navItems[0].style.marginTop = '10px';
    navItems[1].style.marginTop = '10px';
    navItems[2].style.marginTop = '10px';
  } else {
    navLinks.style.display = 'none';
    hamburger.style.display = 'block';
    x.style.display = 'none';
    d.style.display = 'inline';
    dTwo.style.display = 'inline';
  }
};

const name = document.getElementsByName('name')[0];
const email = document.getElementsByName('email')[0];
const message = document.getElementsByName('message')[0];

name.addEventListener('input', (evt) => {
  const value = name.value.trim();
  if (value) {
    name.dataset.state = 'valid';
  } else {
    name.dataset.state = 'invalid';
  }
});
// email.addEventListener('input', (evt) => {
//   const value = email.value.trim();
//   if (value) {
//     email.dataset.state = 'valid';
//   } else {
//     email.dataset.state = 'invalid';
//   }
// });
message.addEventListener('input', (evt) => {
  let value = message.value.trim();
  if (value) {
    message.dataset.state = 'valid';
  } else {
    message.dataset.state = 'invalid';
  }
  if ((value = '')) {
    message.dataset.state = 'nothing';
  }
});

const validateEmail = () => {
  const form = document.querySelector('form');
  const email = document.getElementById('email').value;
  const emailField = document.getElementById('email');
  const text = document.getElementById('email-text');
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    emailField.classList.add('valid');
    emailField.dataset.state = 'valid';
    emailField.classList.remove('invalid');
    text.innerHTML = 'Your Email Address is Valid';
    text.style.color = '#00ff00';
  } else {
    emailField.classList.remove('valid');
    emailField.dataset.state = 'invalid';
    emailField.classList.add('invalid');
    text.innerHTML = 'Please Enter A Valid Email Address';
    text.style.color = '#ff0000';
  }
  if (email == '') {
    emailField.classList.remove('valid');
    emailField.classList.remove('invalid');
    text.innerHTML = '';
    text.style.color = '#ff0000';
    text.style.position = 'relative';
    text.style.bottom = '0.3rem';
  }
};

// carousel functionality:

//get track
//get dots
//get slide

// move to target slide on nav-indicator-button click
const track = document.querySelector('.carousel');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);
const slides = Array.from(track.children);
const nextButton = document.querySelector('.slide-right-button');
const prevButton = document.querySelector('.slide-left-button');
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    nextButton.classList.add('is-hidden');
    prevButton.classList.remove('is-hidden');
  } else {
    nextButton.classList.remove('is-hidden');
    prevButton.classList.remove('is-hidden');
  }
};

dotsNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// when i click right, move slides to the right
nextButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// when i click left, move slides to the left
prevButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

let leftOrRight = 'right';
let navLeftOrRight = 'right';

autoMove = () => {
  const currentSlide = track.querySelector('.current-slide');
  const firstSlide = track.querySelector('.first-slide');
  const secondSlide = track.querySelector('.second-slide');
  const thirdSlide = track.querySelector('.third-slide');
  let targetSlide = currentSlide.nextElementSibling;
  if (currentSlide === thirdSlide) {
    // If the current slide is the last one, set the
    // target slide to one slide to the left.
    targetSlide = currentSlide.previousElementSibling;
    leftOrRight = 'left';
  } else if (currentSlide === secondSlide && leftOrRight === 'left') {
    // If the current slide is the middle slide, AND
    // the leftOrRight variable is set to 'left',
    // set the target slide to one to the left.
    targetSlide = currentSlide.previousElementSibling;
  } else if (currentSlide === secondSlide && leftOrRight === 'right') {
    // If the current slide is the middle slide, AND
    // the leftOrRight variable is set to 'right',
    // set the target slide to one to the right.
    targetSlide = currentSlide.nextElementSibling;
    leftOrRight = 'left';
  } else if (currentSlide === firstSlide) {
    // If the current slide is the first slide,
    // set the target slide to one slide to the right.
    targetSlide = currentSlide.nextElementSibling;
    leftOrRight = 'right';
  }
  const currentDot = dotsNav.querySelector('.current-slide');
  let targetDot = currentDot.nextElementSibling;
  if (currentDot === dotsNav.lastChild.previousSibling) {
    targetDot = currentDot.previousElementSibling;
  } else if (
    currentDot === dotsNav.lastChild.previousSibling.previousElementSibling &&
    navLeftOrRight === 'right'
  ) {
    targetDot = currentDot.nextElementSibling;
    navLeftOrRight = 'left';
  } else if (
    currentDot === dotsNav.lastChild.previousSibling.previousElementSibling &&
    navLeftOrRight === 'left'
  ) {
    targetDot = currentDot.previousElementSibling;
    navLeftOrRight = 'right';
  } else if (currentDot === dotsNav.firstChild.nextSibling) {
    targetDot = currentDot.nextElementSibling;
  }
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
};

let startMoving = setInterval(autoMove, 2000);

stopMoving = () => {
  clearInterval(startMoving);
};
