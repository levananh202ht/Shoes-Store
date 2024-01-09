

const inputName = document.querySelectorAll("input")[0]
const inputEmail = document.querySelectorAll("input")[1]
const inputPassword = document.querySelectorAll("input")[2]

const button = document.querySelector(".container_from button")

button.addEventListener("click", function(event){
    event.preventDefault()

    const userRegister = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value
    }

    if(inputName.value == "" || inputEmail.value == "" || inputPassword.value == ""){
        alert("Please enter complete infomation")
    }else{
        async function postData (urlApi = "", data = {}){

            const config = {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(data)
            }
            const reponse = await fetch(urlApi, config)
    
            return reponse.json()
    
        }
    
        
        const res = postData("https://6589b1f9324d417152595ddd.mockapi.io/api/products", userRegister)
    
        res.then(data => {
            localStorage.setItem("userRegister", JSON.stringify(data))
        })
        window.location.href = "login.html"
    }


})