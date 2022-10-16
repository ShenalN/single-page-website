const listItems = document.querySelectorAll("li");
const button = document.getElementById("download");


for(let i = 0;i < listItems.length;i++) {
  listItems[i].addEventListener("click",() => {
    window.scrollTo(0,(window.innerHeight - (innerHeight / 9)) * i)
  })
}

button.addEventListener("click",() => {
  window.scrollTo(0,(window.innerHeight - 180) * 2)
})

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




