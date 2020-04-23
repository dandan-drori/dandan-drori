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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('carousel-items');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}
