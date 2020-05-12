const navLinks = document.getElementById('nav-links');
let viewPortWidth = window.innerWidth;

if (viewPortWidth > 800) {
  navLinks.style.display = 'flex';
} else {
  navLinks.style.display = 'none';
}

function openPage(pageName, e) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName('tab-content');
  tabLinks = document.getElementsByClassName('tab-links');
  for (i = 0; i < 3; i++) {
    // tabContent[i].style.display = 'none';
    tabLinks[i].classList.remove('tab-active');
  }
  // document.getElementById(pageName).style.display = 'block';
  e.classList.add('tab-active');
}

// document.getElementById('default-open').click();

const navBar = document.getElementById('nav-bar');

window.onscroll = () => {
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
};

const hamburger = document.getElementById('hamburger');
const x = document.getElementById('x');
const navItems = document.getElementsByClassName('nav-items');
const arrow = document.getElementsByClassName('fa-long-arrow-alt-right')[0];

const openNav = () => {
  if (navLinks.style.display === 'none') {
    navLinks.style.display = 'block';
    hamburger.style.display = 'none';
    x.style.display = 'block';
    navBar.style.flexDirection = 'column';
    navItems[0].style.marginTop = '10px';
    navItems[1].style.marginTop = '10px';
    navItems[2].style.marginTop = '10px';
    navBar.style.backgroundColor = '#fff';
  } else {
    navLinks.style.display = 'none';
    hamburger.style.display = 'block';
    x.style.display = 'none';
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

const showHideExploreLinks = () => {
  const exploreLinks = document.getElementsByClassName('explore-links')[0];
  const arrow = document.getElementsByClassName('fa-chevron-down')[0];
  if (exploreLinks.style.display === 'none') {
    exploreLinks.style.display = 'block';
    arrow.style.color = '#f0b70c';
    arrow.style.transform = 'rotateZ(180deg)';
  } else {
    exploreLinks.style.display = 'none';
    arrow.style.color = '#000';
    arrow.style.transform = 'rotateZ(0deg)';
  }
};
const showHideLegalLinks = () => {
  const legalLinks = document.getElementsByClassName('legal-links')[0];
  const arrow = document.getElementsByClassName('fa-chevron-down')[1];
  if (legalLinks.style.display === 'none') {
    legalLinks.style.display = 'block';
    arrow.style.color = '#f0b70c';
    arrow.style.transform = 'rotateZ(180deg)';
  } else {
    legalLinks.style.display = 'none';
    arrow.style.color = '#000';
    arrow.style.transform = 'rotateZ(0deg)';
  }
};
