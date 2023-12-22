/*let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
let isDarkMode = mediaQueryObj.matches;

if (navigator.userAgent.match(/samsung/i)) {
  if (true) {
    alert("Your browser (Samsung Internet) may not show this website " + 
    "correctly. Please consider using a standards-compliant " + 
    "browser instead. \n\n" + 
    "We recommend FireFox, Microsoft Edge, or Google Chrome.");
  }
}*/

//-------------------page transition-------------------------
var transition_el;

window.onload = () => {
  transition_el = document.querySelector('.transition');
  
  setTimeout(() => {
    transition_el.classList.remove('is-active-end');
  }, 750);
  
  const anchors = document.querySelectorAll('.link');
  
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    
    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;
      loadPage(target);
    });
  }
}

function loadPage(_target) {
  transition_el.classList.add('is-active-start');
  
  setTimeout(() => {
    window.location.href = _target;
  }, 750);
}


//----------------elements transition---------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('hidden_fade')){
        entry.target.classList.add('show_fade');
      } else if (entry.target.classList.contains('hidden_slideFromLeft')){
        entry.target.classList.add('show_slideFromLeft');
      } else if (entry.target.classList.contains('hidden_slideFromBottom')) {
        entry.target.classList.add('show_slideFromBottom');
      }
    } else {
      entry.target.classList.remove('show_fade');
      entry.target.classList.remove('show_slideFromLeft');
      entry.target.classList.remove('show_slideFromBottom');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden_fade, .hidden_slideFromLeft, .hidden_slideFromBottom');
hiddenElements.forEach((el) => observer.observe(el));