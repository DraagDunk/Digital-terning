// Hent elementer for HTML
const btn = document.querySelector('#dm-button')
const body = document.querySelector('body')
const diceFaces = document.querySelectorAll('.dieFace')

function darkMode() {
  body.style.backgroundColor = 'darkslategray';
  mode = 'dark';
  btn.innerText = 'Lyst udtryk';
  btn.style.color = 'aquamarine';
  btn.style.borderColor = 'aquamarine';
  for (let face of diceFaces) {
    face.style.backgroundColor = 'gray';
  }
}

function lightMode() {
  body.style.backgroundColor = 'aquamarine';
  mode = 'light';
  btn.innerText = 'Mørkt udtryk';
  btn.style.color = 'darkslategray';
  btn.style.borderColor = 'darkslategray';
  for (let face of diceFaces) {
    face.style.backgroundColor = 'white';
  }
}

let mode = "light"

function toggleMode() {
  if (mode == 'light') {
    darkMode()
  } else {
    lightMode()
  }
}

btn.addEventListener('click', toggleMode)