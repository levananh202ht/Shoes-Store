
const p = document.querySelector("p.username")
const buttonLogout =document.querySelector(".container_header-user button")

const userRegisterLocalStorage = JSON.parse(localStorage.getItem("userRegister")) 

p.innerHTML = userRegisterLocalStorage.name
buttonLogout.addEventListener("click", () => {
    localStorage.removeItem("userRegister")//logout
    window.location.href = "Register.html"// chuyển về register
})