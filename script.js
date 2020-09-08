let box = document.querySelector(".box")
let submit = document.querySelector("#submit");
let surround = document.querySelector("#surround")
submit.addEventListener("click", runIt);

let random = function () {
    return res = Math.round(Math.random() * 2000)
}

function runIt() {
    box.style.display = "block"
    surround.style.display = "flex"
    setTimeout(() => {
        box.style.display = "none"
        surround.style.display = "none"
    }, random());
}