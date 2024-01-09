

const inputName = document.querySelectorAll("input")[0]
const inputEmail = document.querySelectorAll("input")[1]
const inputPassword = document.querySelectorAll("input")[2]

const button = document.querySelector(".container_from button")

button.addEventListener("click", function(event){
    event.preventDefault()

    const ueRegister = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value
    }
    console.log(ueRegister)
})