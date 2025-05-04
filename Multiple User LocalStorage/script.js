var getName = document.querySelector("#name");
var getEmail = document.querySelector("#email");
var getPassword = document.querySelector("#password");


function signUp(){
    
    if(getName.value == "" || getEmail.value == "" || getPassword.value == ""){
        alert("Please fill in all fields")
    }else{
        var allUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        var user = {
            name: getName.value.trim(),
            email: getEmail.value.trim(),
            password: getPassword.value.trim()
        }
        allUsers.push(user);
        
        localStorage.setItem("users", JSON.stringify(allUsers));
    }
}

function login(){

    var allUsers = JSON.parse(localStorage.getItem("users")) || [];
    var filterUser = allUsers.filter(function(data){
        return data.email == getEmail.value && data.password == getPassword.value;
    })

    if(filterUser.length == 0){
        alert("Invalid email or password")
    }else{
        alert("Login successfully");

    }

}