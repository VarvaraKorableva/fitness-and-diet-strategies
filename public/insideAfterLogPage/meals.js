async function renderMeals() {
    while (localStorage.getItem('todayMeals') === null) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    const mealsData = JSON.parse(localStorage.getItem('todayMeals')) || [];

    const todayFoodTemplate = document.getElementById('todayFoodTemplate');

    for (const meal of mealsData) {
        const mealElement = document.createElement('div');
        mealElement.innerHTML = `
            <p>${meal.product_name}</p>
            <p>Calories: ${meal.calories}</p>
            <p>Grams: ${meal.grams}</p>
        `;

        mealElement.style.border = '2px solid #fff';
        mealElement.style.borderRadius = '20px'
        mealElement.style.margin = '10px'
        mealElement.style.padding = '10px'
        mealElement.style.color = '#fff'
        mealElement.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'

        todayFoodTemplate.appendChild(mealElement);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderMeals();
});