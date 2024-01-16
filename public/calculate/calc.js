document.addEventListener("DOMContentLoaded", function () {
  const resultDiv = document.getElementById("result");

  const postData = async () => {
    try {
      const response = await fetch("/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender: "male",
          weight: 70,
          height: 180,
          age: 25,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      displayResult(data);
    } catch (error) {
      console.error("Error:", error);
    }

    const displayResult = (data) => {
        resultDiv.innerHTML = `<p>You need ${data.totalCalories} ccal per day!</p>`;
        resultDiv.style.color = "red";
        resultDiv.style.fontStyle = "italic";
      };
    
      postData();

  }})

  function AddFood(title, amount) {
    return fetch(
      `https://api.api-ninjas.com/v1/nutrition?query=${amount} ${title}&X-Api-Key=S1qqU4se/app/0TyiTWsDw==PzMrGtkYUf4ryTn2`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }

  AddFood('banana', '100g');
   
  
 

//   AddFood("snickers", "50g");

