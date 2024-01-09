
const p = document.querySelector("p.username")
const buttonLogout =document.querySelector(".container_header-user button")

const userRegisterLocalStorage = JSON.parse(localStorage.getItem("userRegister")) 

p.innerHTML = userRegisterLocalStorage?.name

buttonLogout.addEventListener("click", () => {
    localStorage.removeItem("userRegister")//logout
    window.location.href = "Register.html"// chuyển về register
})

if(userRegisterLocalStorage == undefined){
    window.location.href = "Register.html"
}
    // slide
const slide = document.querySelectorAll(".container_slider-bar")
let index = 0

function next(){
    slide[index].classList.remove("active")
    index = index + 1
    slide[index].classList.add("active")
}
function prev(){
    slide[index].classList.remove("active")
    index = index - 1
    slide[index].classList.add("active")
}
    // show slidebar
const navbar = document.querySelector(".container_header-navbar")
const iconBar = document.querySelector(".container_header-bar i")

iconBar.addEventListener("click", () => {
    navbar.style.display = "block"
})