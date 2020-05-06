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

const navBar = document.getElementById('nav-bar');
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
  } else {
    navLinks.style.display = 'none';
    hamburger.style.display = 'block';
    x.style.display = 'none';
  }
};
