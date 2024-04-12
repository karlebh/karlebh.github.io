const open = document.getElementById("open")
const close = document.getElementById("close")
const mobileMenu = document.getElementById("mobile-menu")

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
