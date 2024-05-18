// this code is to validate the form so as to make sure that there is a value for full name, email and password

const form = document.getElementById('form');
const fullName = document.getElementById('full_name');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        clearForm();
        alert("Your response has been submitted successfully");
    }
})

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess= element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    
}



const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let isValid = true;

    if (fullNameValue === "") {
        setError(fullName, 'Full Name is required');
        isValid = false;

    }else{
        setSuccess(fullName);
    }

    if (passwordValue === ''){
        setError(password, 'Password is required');
        isValid = false;
    }else if (passwordValue.length < 8){
        setError(password, 'Password should not be less than 8 characters'); 
        isValid = false;
    }else{
        setSuccess(password);
    }
    return isValid;


}

const clearForm = () => {
    fullName.value = '';
    email.value = '';
    password.value = '';
    
    const inputControls = document.querySelectorAll('.input-box');
    inputControls.forEach(control => {
        control.classList.remove('success');
        control.classList.remove('error');
        const errorDisplay = control.querySelector('.error');
        errorDisplay.innerText = '';
    });
}
