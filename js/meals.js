// const defaultData = () => {
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
//         .then(res => res.json())
//         .then(data => displayMeals(data.meals))
// }
// defaultData()

const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
loadMeals('')

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">Ingredient:
            <ul class="list-unstyled">
              <li>${meal.strIngredient1}</li>
              <li>${meal.strIngredient2}</li>
              <li>${meal.strIngredient3}</li>
              <li>${meal.strIngredient4}</li>
              <li>${meal.strIngredient5}</li>
              <li>${meal.strIngredient6}</li>
              <li>${meal.strIngredient7}</li>
              <li>${meal.strIngredient8}</li>
              <li>${meal.strIngredient9}</li>
              <li>${meal.strIngredient10}</li>
            </ul>
            </p>
            
                <a onclick= "loadMealsDetails(${meal.idMeal})" type="button" class="fw-semibold text-warning text-decoration-underline"                       data-bs-toggle="modal" data-bs-target="#mealsDetailsModal">
                     Details
                </a>
                
        </div>`
        mealsContainer.appendChild(mealDiv)
    });
}

const searchMeals = () => {
    const searchText = document.getElementById('search-text').value;
    document.getElementById('search-text').value = '';
    loadMeals(searchText)


}

const loadMealsDetails = idMeals => {
    console.log(idMeals);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]))
}

const displayMealsDetails = meal => {
    document.getElementById('mealsDetailsModalLabel').innerText = meal.strMeal
    const modalBody = document.getElementById('mealsDetailsModalBody')
    modalBody.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}" >
    <h5 class="text-center mt-3">Instructions</h5>
    <p class ="mt-4">${meal.strInstructions}</p>
    `
}