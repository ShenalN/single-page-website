const listItems = document.querySelectorAll("li");
const button = document.getElementById("download");


//menu activator

const menuIcon = document.querySelector(".menu")
const nav = document.querySelector("nav")

menuIcon.addEventListener("click",() => {
  menuIcon.classList.toggle("active")
  nav.classList.toggle("active")
})

nav.addEventListener("click",() => {
    menuIcon.classList.toggle("active")
    nav.classList.toggle("active")
})




