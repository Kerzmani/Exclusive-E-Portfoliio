const headerTitleSecondary = document.querySelector('.blue');
const hr = document.querySelector('hr');
hr.style.width= headerTitleSecondary.getBoundingClientRect().width + 'px';

console.log(headerTitleSecondary.getBoundingClientRect().width);

