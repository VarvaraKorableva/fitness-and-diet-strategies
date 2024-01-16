
document.addEventListener('DOMContentLoaded', function () {
        const modalContainer = document.getElementById('modal');
        modalContainer.style.display = 'none';
        const openModalBtn = document.querySelector('.eaten__food__add__btn');
        const closeModalBtn = document.querySelector('.submit');
        
        const myForm = document.forms[0];
      
        openModalBtn.addEventListener('click', function () {
          modalContainer.style.display = 'block';
        });
      
        closeModalBtn.addEventListener('click', function () {
          modalContainer.style.display = 'none';
        });
      
        myForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const title = document.getElementById('title').value;
          const amount = document.getElementById('amount').value;

          AddFood(title,amount);

          modalContainer.style.display = 'none';
        });
      });
    






function AddFood(title, amount) {
    return fetch(
      `https://api.api-ninjas.com/v1/nutrition?query=${amount}gr ${title}&X-Api-Key=S1qqU4se/app/0TyiTWsDw==PzMrGtkYUf4ryTn2`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        
        return res.json();
      })
      .then((data) => {
        const div = document.getElementById('eaten');
        const newfood = document.createElement('p');
        newfood.innerText = `${data[0].name} | ${data[0].serving_size_g}gr| ${data[0].calories}ccal`;
        div.append(newfood)
        return data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }









//