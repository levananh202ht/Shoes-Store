
const p = document.querySelector("p.username")

const userRegisterLocalStorage = JSON.parse(localStorage.getItem("userRegister"))
console.log(userRegisterLocalStorage.name)
p.innerHTML = userRegisterLocalStorage.name