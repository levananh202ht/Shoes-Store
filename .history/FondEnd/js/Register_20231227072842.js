

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

    async function postData (urlApi = "", data = {}){

        const config = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        }
        const reponse = await fetch(urlApi)

        console.log(reponse)

    }

    
    postData("https://6589b1f9324d417152595ddd.mockapi.io/api/products", ueRegister)

})