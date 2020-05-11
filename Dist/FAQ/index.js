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

const navLinks = document.getElementById('nav-links');
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

const showHideAnswer = (e) => {
  // get questions list
  const questions = document.getElementsByClassName('questions')[0];
  // get question
  const question = questions.getElementsByClassName('question');
  // get answer
  const answer = questions.getElementsByClassName('answer');
  // get arrow
  const arrow = questions.getElementsByClassName('fa-chevron-right');
  if (e.nextElementSibling.style.display === 'none') {
    // when question is clicked, if answer is hidden, show it, and change the arrow's direction.
    e.nextElementSibling.style.display = 'block';
    e.nextElementSibling.classList.toggle('open');
    e.childNodes[1].style.transform = 'rotateZ(90deg)';
    e.childNodes[1].style.color = '#f0b70c';
  } else {
    // when question is clicked, if answer is shown, hide it, and change the arrow's direction.
    e.childNodes[1].style.transform = 'rotateZ(0deg)';
    e.childNodes[1].style.color = '#000';
    e.nextElementSibling.classList.toggle('open');
    e.nextElementSibling.style.display = 'none';
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
