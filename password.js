function showpassword(){
    const password = document.getElementById('input')
    const icon = document.getElementById('eye')

    if (password.type === "password"){
        password.type ="text"
        icon.src = "/eye icon.jpeg"
    }else{
        password.type = "password"
        icon.src = "/eye icons.png"
    }
}