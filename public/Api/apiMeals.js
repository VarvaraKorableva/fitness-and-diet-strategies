export const BASE_URL = '//localhost:3000';

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  };

export const getMeals = ({user_id}) => {
    return fetch(`${BASE_URL}/meals/${user_id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    })
        .then(checkResponse)
  };

  //product_name, calories, grams, user_id
  export const addMeal = ({product_name, calories, grams, user_id}) => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/meals`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_name: product_name, 
        calories: calories, 
        grams: grams, 
        user_id: user_id,
      }),
    })
      .then(checkResponse);
  }