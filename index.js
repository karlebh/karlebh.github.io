const open = document.getElementById("open")
const close = document.getElementById("close")
const mobileMenu = document.getElementById("mobile-menu")
const year = document.getElementById("year")
const goUp = document.getElementById("goUp")

year.textContent = new Date().getFullYear()

let scrollPosition = window.scrollY
let threshold = 1000 // Adjust this value as needed

window.addEventListener("scroll", () => {
  if (scrollPosition > 700) {
    goUp.style.display = "none" // Hide the goUp
  } else {
    goUp.style.display = "block" // Show the tag
  }
})

open.onclick = function () {
  open.classList.add("hidden")
  close.classList.replace("hidden", "block")
  mobileMenu.classList.replace("hidden", "flex")
}

close.onclick = function () {
  close.classList.replace("block", "hidden")
  open.classList.replace("hidden", "block")
  mobileMenu.classList.replace("flex", "hidden")
}
