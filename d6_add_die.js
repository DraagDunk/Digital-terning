const add_die_btn = document.querySelector("#add-die-button")
const die_con = document.querySelector("#dice")

let num_dice = 1;

function construct_die(die, face) {
    die.append("")
    die.append(face)
    die.append("")
}

function add_die() {
    if (num_dice < 4) {
        const newDie = document.createElement("div")
        newDie.className = "dieFace"
        const newFace = document.createElement("p")
        newFace.className = "faceNum"
        construct_die(newDie, newFace)
        die_con.append(newDie)

        newDie.addEventListener("click", rollD6)
        newDie.dispatchEvent(new Event("click"))

        num_dice++
    }
}

add_die_btn.addEventListener("click", add_die)