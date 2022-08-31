const loadMeal =(search)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data =>displyMeals(data.meals))
}

const displyMeals = meals =>{
// console.log(meals)
const mealsContainer = document.getElementById('meal-cntainer')
mealsContainer.innerHTML=``;
meals.forEach (meal =>{
    // console.log(meal);
    const mealContainer = document.createElement('div')
    mealContainer.classList.add('col')
    mealContainer.innerHTML =`
    <div onclick="loadMealDetails(${meal.idMeal})" class="card">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
  </div>
    
    
    `;
    mealsContainer.appendChild(mealContainer)
})
}

const seacrhFood=()=>{
    // console.log('sers')
    const searchField= document.getElementById('search-filed')
    const searchValue = searchField.value;
    loadMeal(searchValue)
    searchField.value= '';
}

const loadMealDetails=(idMeal)=>{
    // console.log(idMeal);
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displyMealDetails(data.meals[0]))
    // console.log(url)

}

const displyMealDetails =meal=>{
    const detailsContainer = document.getElementById('detail-conatiner')
    detailsContainer.innerHTML='';
    const mealDiv = document.createElement('div')
    mealDiv.classList.add('card')
    mealDiv.innerHTML=`
   
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

    
    `;
    detailsContainer .appendChild(mealDiv)

}


loadMeal('');