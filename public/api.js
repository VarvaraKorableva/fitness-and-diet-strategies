export const BASE_URL = '//localhost:3000';

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  };

export const register = ({ name, email, password, weight, height, gender, age }) => {
    return fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        weight: weight,
        height: height,
        gender: gender,
        age: age,
      })
    })
    .then((res) => {
      console.log(res);
      return checkResponse(res);
    })
    .catch((error) => {
      console.error('Ошибка при отправке запроса:', error);
      throw error;
    });
  };

export const authorize = ( {password, email} ) => {
    return fetch(`${BASE_URL}/users/signin`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          password: password,
          email: email, 
        })
    })
        .then(checkResponse)
  };  
