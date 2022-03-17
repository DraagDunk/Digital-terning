// Hent elementer fra HTML
const faceNum = document.querySelector("#faceNum");
const face = document.querySelector("#face");

// Slå vilkårligt-sidet terning
function rollDie(sides = 6) {
  return Math.floor(Math.random() * sides) + 1
}

// Simpel animation for lidt visuel feedback
function rollAnimation() {
  face.style.backgroundColor = 'red'
  face.style.transform = 'rotate(10deg)'
  setTimeout(function () {
    face.style.transform = 'rotate(0deg)';
    face.style.backgroundColor = 'white';
  }, 100)
}

// Slå 6-sidet terning og opdater tekst på terningelement
function rollD6() {
  faceNum.innerText = rollDie(6);
  rollAnimation()
}

// Tal på terningen i det siden åbnes
faceNum.innerText = rollDie(6);

// Slå med terningen ved klik
face.addEventListener('click', rollD6)