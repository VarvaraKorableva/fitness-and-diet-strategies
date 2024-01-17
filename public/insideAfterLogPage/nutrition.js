import {sendFoodFromNutrion} from '../Api/apiNutrition.js'
import {addMeal} from '../Api/apiMeals.js'

const eatenFoodAddBtn = document.getElementById('eaten__food__add__btn')
const userInfoPopupCloseBtn = document.getElementById('userInfo__popup__close__btn')
const form = document.getElementById('userInfo__popup__container')
const successfulPopupCloseBtn = document.getElementById('userInfo__SuccessfulPopup__close__btn')

  async function addFoodToDataBase() {
    try {
      const { productName, gramsConsumed, user } = getFormData();
      const response = await sendFoodFromNutrion(productName, gramsConsumed);
      console.log(response)
      console.log(response[0].name)
      const ccal = Math.floor(response[0].calories / 100)
      await addMeal({
        product_name: response[0].name,
        calories: ccal,
        grams: gramsConsumed,
        user_id: user.id,
      });
      closePopup();
      location.reload();
      openSuccessfulPopup()

    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  function getFormData() {
    const productName = document.getElementById('userInfo-name').value;
    const gramsConsumed = document.getElementById('userInfo-gramms').value;
    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);
  
    return { productName, gramsConsumed, user };
  }
  

function handleAddFoodBtnClick() {
    const userInfo__popup = document.getElementById('userInfo__popup')
    userInfo__popup.style.visibility = 'visible'
}

function closePopup() {
    const userInfo__popup = document.getElementById('userInfo__popup')
    const successfulPopup = document.getElementById('userInfo__SuccessfulPopup')
    userInfo__popup.style.visibility = 'hidden';
    successfulPopup.style.visibility = 'hidden';
}

function handleUserInfoFormSubmit(event) {
    event.preventDefault();
    addFoodToDataBase();
}  

function openSuccessfulPopup() {
    const successfulPopup = document.getElementById('userInfo__SuccessfulPopup')
    successfulPopup.style.visibility = 'visible'
}

eatenFoodAddBtn.addEventListener('click', handleAddFoodBtnClick)
userInfoPopupCloseBtn.addEventListener('click', closePopup)
form.addEventListener('submit', handleUserInfoFormSubmit);
successfulPopupCloseBtn.addEventListener('click', closePopup)