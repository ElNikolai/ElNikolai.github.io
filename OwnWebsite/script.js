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