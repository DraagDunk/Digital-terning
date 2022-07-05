// Hent elementer for HTML
const btns = document.querySelectorAll('button')
const dm_btn = document.querySelector('#dm-button')
const body = document.querySelector('body')
let r = document.querySelector(":root")

function darkMode() {
  mode = 'dark';
  document.querySelector("#dm-button > img").setAttribute("src", "sun.png");
  r.style.setProperty("--backColor", "darkslategray")
  r.style.setProperty("--textColor", "aquamarine")
  r.style.setProperty("--faceColor", "gray")

}

function lightMode() {
  mode = 'light';
  document.querySelector("#dm-button > img").setAttribute("src", "moon.png");
  r.style.setProperty("--backColor", "aquamarine")
  r.style.setProperty("--textColor", "darkslategray")
  r.style.setProperty("--faceColor", "white")

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