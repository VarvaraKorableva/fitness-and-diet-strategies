export function sendFoodFromNutrion(productName, gramsConsumed) {
    return fetch(
      `https://api.api-ninjas.com/v1/nutrition?query=${gramsConsumed} ${productName}&X-Api-Key=S1qqU4se/app/0TyiTWsDw==PzMrGtkYUf4ryTn2`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
    }      