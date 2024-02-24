const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

function setError(inputId, err) {
    const controlForm = inputId.parentElement;
    controlForm.classList.remove("success");
    controlForm.classList.add("fail");
    const small = controlForm.querySelector(".error");
    small.textContent = err;
}

function setSuccess(inputId) {
    const controlForm = inputId.parentElement;
    controlForm.classList.remove("fail");
    controlForm.classList.add("success");
    
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if (usernameValue === "") {
        setError(username, "Input can not be empty");
    } else {
        setSuccess(username);
    }
    if (emailValue === "" || !isEmail(emailValue)) {
        setError(email, "Email can not be empty or not valid ");
    } else {
        setSuccess(email);
    }
    if (passwordValue === "") {
        setError(password, "Password can not be empty");
    } else {
        setSuccess(password);
    }
    if (passwordCheckValue === "" || passwordCheckValue !== passwordValue) {
        setError(passwordCheck, "Password does not match");
    } else {
        setSuccess(passwordCheck);
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
});
