import { register } from './api.js';

const form = document.getElementById('reg-form')
const closeBtn =document.getElementById('reg__popup__close__btn')

function handleRegSubmit(userData) {
    register({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        weight: userData.weight,
        height: userData.height,
        gender: userData.gender, 
        age: userData.age,
    })
    .then((res) => {
        console.log(res)
        const form = document.getElementById('reg-form')
        const regTitleContainer = document.getElementById('reg__title-container')
        //const regContainer = document.getElementById('reg__container')
        form.style.display = 'none'
        regTitleContainer.style.display = 'none'
        showPopup(res.msg)

    })
    .catch((err) => {
        console.log('Error:', err)
    })
}

function handleFormSubmit(event) {
    event.preventDefault()

    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const weight = document.getElementById('reg-weight').value;
    const height = document.getElementById('reg-height').value;
    const gender = document.getElementById('reg-gender').value;
    const age = document.getElementById('reg-age').value;

    const userData = {
        name: name,
        email: email,
        password: password,
        weight: weight,
        height: height,
        gender: gender,
        age: age,
    };

    handleRegSubmit(userData);

}

function showPopup(msg) {
    const popup = document.getElementById('reg__popup')
    popup.style.visibility = 'visible'
    const p = document.getElementById('reg__popup__message')
    p.textContent = `${msg}`
}

function closePopup() {
    const popup = document.getElementById('reg__popup')
    popup.style.visibility = 'hidden'

    window.location.href = '/signInPage.html'
}

form.addEventListener('submit', handleFormSubmit)
closeBtn.addEventListener('click', closePopup)