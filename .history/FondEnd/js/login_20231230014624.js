
const inputName = document.querySelectorAll("input")[0]
const inputPassword = document.querySelectorAll("input")[1]

const button = document.querySelector(".container_from button")

const container = document.querySelector(".container")
const loader = document.querySelector(".loader")

setTimeout(()=> {
    loader.style.display = "none"
    container.style.display = "flex"
}, 2000)

button.addEventListener("click", function(e){
    e.preventDefault()
    
    const userRegisterLocalStorage = JSON.parse(localStorage.getItem("userRegister"))
    console.log(userRegisterLocalStorage)

    if(inputName.value == userRegisterLocalStorage.name && inputPassword.value == userRegisterLocalStorage.password){
    
        swal({
            title: "Login Successfully",
            icon: "success"
        }).then(
            ()=> {
                setTimeout(() => {
                    window.location.href = "index.html" //sang login
                }, 1500)
            }
        )
    }
})
