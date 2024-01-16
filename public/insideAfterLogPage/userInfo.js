function writeGreetings() {
    const p = document.getElementById('inside__header__greetings')
    const userData = localStorage.getItem('userData')
    const user = JSON.parse(userData)
    p.innerText = `Hello, ${user.name}!`
}

function viewIndexAndDailyCcal() {
    const indexPlace = document.getElementById('index')
    const userData = localStorage.getItem('userData')
    const user = JSON.parse(userData)

    const index = calculateBMI(user.weight, user.height)
    indexPlace.innerText = ` ${index}`

    const ccalPlace = document.getElementById('daily__calorie_intake')
    const ccal = calculateBMR(user.weight, user.height, user.age, user.gender)
    ccalPlace.innerText = ` ${ccal}`
}

//ccal
function calculateBMR(weight, height, age, gender) {
    const famaleBMR = 447.593 + (9.247 * weight)+(3.098 * height) - (4.330 * age)
    const maleBMR = 88.362+(13.397 * weight)+(4.799 * height) - (5.677 * age)
    if (gender === 'female') {
        return famaleBMR.toFixed(1)
    } else {
        return maleBMR.toFixed(1)
    }
}

//index
function calculateBMI(weight, height) {
    // Переводим рост в метры, если он задан в сантиметрах
    height = height / 100
    // Вычисляем ИМТ
    const bmi = weight / (height * height)
    return bmi.toFixed(2)
}

//document.addEventListener("DOMContentLoaded", writeGreetings)
document.addEventListener("DOMContentLoaded", function() {
    writeGreetings();
    viewIndexAndDailyCcal();
});