// Variables

let isModalOpen = false;
let contrastToggle = false;
const shapes = document.querySelectorAll(".shape");
const headerTitleSecondary = document.querySelector(".title-secondary .blue");
const hr = document.querySelector("hr");



// HR ELEMENT WIDTH DYNAMICALLY SET TO MATCH THE SECONDARY HEADER TITLE

hr.style.width = headerTitleSecondary.getBoundingClientRect().width + "px";
console.log(headerTitleSecondary.getBoundingClientRect().width);


// EMAILJS CONFIGURATION


// template_nuqk5ta;
// service_kv7tzlb;
// ylUlp9MOXU0lDJwC-


// FUNCTIONS 


// CONTACT FORM FUNCTION


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");
  emailjs
    .sendForm(
      "service_kv7tzlb",
      "template_nuqk5ta",
      event.target,
      "ylUlp9MOXU0lDJwC-",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is currently unavailabe. Please contact me directly at KerzmanDeveloping@gmail.com",
      );
    });
}

// MODAL TOGGLE FUNCTION


function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    document.body.style.overflow = 'auto';
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.style.overflow = 'hidden';
  document.body.classList.add("modal--open")
}


// CONTRAST TOGGLE FUNCTION

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("dark-theme");
  }
  else{
    document.body.classList.remove("dark-theme");
  }

}



// BACKGROUND MOVEMENT FUNCTION

function moveBackground(event) {
  const mousePositionX = event.clientX * 0.05;
  const mousePositionY = event.clientY * 0.05;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${mousePositionX * boolInt}px, ${mousePositionY * boolInt}px)`;
  }
}

document.addEventListener('mousemove', moveBackground);
