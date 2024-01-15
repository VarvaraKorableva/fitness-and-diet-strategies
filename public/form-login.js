import { authorize } from './api.js';

const form = document.getElementById('log-form');

function handleAuthorizeSubmit(userData) {
    authorize({
        email: userData.email,
        password: userData.password,
    })
    .then((res) => {
        console.log(res)

    })
    .catch((err) => {
        console.log('Error:', err)
    })
}

function handleFormSubmit(event) {
    event.preventDefault()

    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    const userData = {
        email: email,
        password: password,
    };

    handleAuthorizeSubmit(userData);

}

form.addEventListener('submit', handleFormSubmit);