// Hent elementer for HTML
const btns = document.querySelectorAll('button')
const dm_btn = document.querySelector('#dm-button')
const body = document.querySelector('body')
const diceFaces = document.querySelectorAll('.dieFace')

function darkMode() {
  body.style.backgroundColor = 'darkslategray';
  mode = 'dark';
  dm_btn.innerText = 'Lyst udtryk';
  for (let btn of btns) {
    btn.style.color = 'aquamarine';
    btn.style.borderColor = 'aquamarine';
  }
  for (let face of diceFaces) {
    face.style.backgroundColor = 'gray';
  }

}

function lightMode() {
  body.style.backgroundColor = 'aquamarine';
  mode = 'light';
  dm_btn.innerText = 'Mørkt udtryk';
  for (let btn of btns) {
    btn.style.color = 'darkslategray';
    btn.style.borderColor = 'darkslategray';
  }
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

dm_btn.addEventListener("click", toggleMode)