// Hent elementer for HTML
const btn = document.querySelector('#dm-button')
const body = document.querySelector('body')

function darkMode() {
  body.style.backgroundColor = 'darkslategray';
  mode = 'dark';
  btn.innerText = 'Lyst udtryk';
}

function lightMode() {
  body.style.backgroundColor = 'aquamarine';
  mode = 'light';
  btn.innerText = 'Mørkt udtryk';
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