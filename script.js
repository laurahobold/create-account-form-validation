const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let error = false;

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'username cannot be blank')
        error = true;
    } else {
        //add sucess class
        setSuccessFor(username)
    }
    if (emailValue === '') {
        setErrorFor(email, 'email cannot be blank')
        error = true;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'email is not valid')
        error = true;
    } else {
        setSuccessFor(email)
    }
    if (passwordValue === '') {
        setErrorFor(password, 'password cannot be blank')
        error = true;
    } else {
        setSuccessFor(password)
    }
    if (password2Value === '') {
        setErrorFor(password2, 'password check cannot be blank')
        error = true;
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'passwords do not match')
        error = true;
    } else {
        setSuccessFor(password2)
    }
    if (!error) {
        submitMessage();
    }
}

//success message
function submitMessage() {
    document.getElementById('form').style.display = 'none';
    document.getElementById('title').innerHTML = 'thx ;)';
    document.getElementById('back').style.display = 'flex';
}

function back() {
    document.getElementById('form').style.display = 'block';
    document.getElementById('title').innerHTML = 'create account';
    document.getElementById('back').style.display = 'none';
    username.value = ''
    email.value = ''
    password.value = ''
    password2.value = ''
    username.parentElement.classList.remove('success');
    email.parentElement.classList.remove('success');
    password.parentElement.classList.remove('success');
    password2.parentElement.classList.remove('success');
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}