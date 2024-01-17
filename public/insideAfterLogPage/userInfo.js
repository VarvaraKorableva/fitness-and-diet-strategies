import { getMeals } from '../Api/apiMeals.js'

function getContent() {
    try {
        const userData = localStorage.getItem('userData');

        if (!userData) {
            console.log('No user data found in localStorage');
            return;
        }

        const user = JSON.parse(userData);

        if (!user || !user.id) {
            console.log('Invalid user data in localStorage');
            return;
        }

        const user_id = user.id;
        console.log(user_id)
        getMeals({ user_id })
            .then((res) => {
                console.log(res)
                localStorage.setItem('todayMeals', JSON.stringify(res))
            })
            .catch((err) => {
                console.log('Error fetching meals:', err);
            });

    } catch (error) {
        console.log('Error parsing user data from localStorage:', error);
    }
}

function writeGreetings() {
    const p = document.getElementById('inside__header__greetings')
    const userData = localStorage.getItem('userData')
    const user = JSON.parse(userData)
    p.innerText = `Hello, ${user.name}!`
    const currentDate = new Date();


    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
    const day = currentDate.getDate();


    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    const date = document.getElementById('date')
    date.innerText = `Today is ${formattedDate}`
    
    localStorage.setItem('todayDate', JSON.stringify(formattedDate))

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

    const eatenCcal = document.getElementById('eaten__ccal')
    const counter = countEatenCcal()
    eatenCcal.innerText = `${counter}`

    const remainingCcal = document.getElementById('remaining__ccal')
    const remaining = calculatingRemainingCalories(ccal,counter)
    if (remaining < 1) {
        remainingCcal.innerText = `You've exceeded your daily calorie intake by ${Math.abs(remaining)} calories today`
        remainingCcal.style.color = 'red'
    }else {
        remainingCcal.innerText = `${remaining}`
    }
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

function countEatenCcal() {
    const mealsData = JSON.parse(localStorage.getItem('todayMeals'));
    let counter = 0;

    for (const meal of mealsData) {
      counter += meal.calories;
    }
  
    return counter;
}

function calculatingRemainingCalories(a,b) {
   return a - b
}


document.addEventListener("DOMContentLoaded", function() {
    writeGreetings();
    viewIndexAndDailyCcal();
    getContent();
});

