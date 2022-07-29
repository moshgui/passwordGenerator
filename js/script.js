const sliderElement = document.getElementById('slider');
const buttonElement = document.getElementById('button');

const sizePassword = document.getElementById('value');
const password = document.getElementById('password');

const containerPassword = document.getElementById('container-password');

const charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@$#%";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
};

function generatePassword() {
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));        
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;  
    newPass = pass;  
}

function copyPassword() {
    alert("Senha copiada!");

    navigator.clipboard.writeText(newPass);
}