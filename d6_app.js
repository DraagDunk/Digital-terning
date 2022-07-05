// Hent elementer fra HTML
const faceNum = document.querySelectorAll(".faceNum");
const dice = document.querySelectorAll(".dieFace");

// Slå vilkårligt-sidet terning
function rollDie(sides = 6) {
  return Math.floor(Math.random() * sides) + 1
}

// Simpel animation for lidt visuel feedback
function rollAnimation(die) {
  backCol = die.style.backgroundColor
  die.style.backgroundColor = 'red'
  die.style.transform = 'rotate(10deg)'
  setTimeout(function () {
    die.style.transform = 'rotate(0deg)';
    die.style.backgroundColor = backCol;
  }, 100)
}

// Slå 6-sidet terning og opdater tekst på terningelement
function rollD6() {
  let faceVal = this.childNodes[1];
  faceVal.innerText = rollDie(6);
  rollAnimation(this)
}

// Slå med alle terninger
function rollAll() {
  const dice = document.querySelectorAll(".dieFace");
  for (let die of dice) {
    die.dispatchEvent(new Event("click"))
  }
}

// Tal på terningen i det siden åbnes
for (let face of faceNum) {
  face.innerText = rollDie(6)
}

// Slå med terningen ved klik
for (let die of dice) {
  die.addEventListener('click', rollD6)
}

// Slå med alle terninger ved klik
let roll_all_btn = document.querySelector("#roll-all")
roll_all_btn.addEventListener("click", rollAll)