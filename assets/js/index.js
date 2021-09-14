// loading spinner

const spinner = document.getElementById("loading__spinner");
spinner.style.display = "none";

// search onclick function

document
  .getElementById("meal__search__button")
  .addEventListener("click", () => {
    const inputValue = document.getElementById("meal__search__input");
    const inputText = inputValue.value;
    spinner.style.display = "block";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
      .then((res) => res.json())
      .then((allMeals) => {
        spinner.style.display = "none";
        displayMeal(allMeals.meals);
      });
    inputValue.value = "";
  });

// display meal cards function

const displayMeal = (meals) => {
  const mealContainer = document.getElementById("meal__container");
  mealContainer.textContent = "";
  for (const meal of meals) {
    const { idMeal, strMealThumb, strMeal } = meal;
    const mealCard = document.createElement("div");
    mealCard.setAttribute("class", "card");
    mealCard.innerHTML = `
        <div onclick="showDetails('${idMeal}')">
            <img src="${strMealThumb}" alt="${idMeal}" />
            <h3>${strMeal}</h3>      
        </div>
    `;
    mealContainer.appendChild(mealCard);
  }
};

// show details

const showDetails = (id) => {
  spinner.style.display = "block";
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((singleMeal) => {
      spinner.style.display = "none";
      openModal(singleMeal.meals);
    });
};

// open modal & show details
const modalContainer = document.getElementById("meal__detail");
const openModal = (meal) => {
  console.log(meal[0]);
  const {
    strMealThumb,
    strMeal,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
    strCategory,
    strInstructions,
  } = meal[0];
  modalContainer.style.display = "block";
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.innerHTML = `
        <div class="modal__image">
          <button id="cross__icon">&times;</button>
          <img src="${strMealThumb}" alt="${strMeal}" />
        </div>
        <div class="modal__content">
          <h4>${strMeal}</h4>
          <h4>Instructions</h4>
          <p>${strInstructions}</p>  
          <h4>Category: ${strCategory}</h4>
          <h4>Ingredients</h4>
          <ul>
            <li>${strMeasure1} ${strIngredient1}</li>
            <li>${strMeasure2} ${strIngredient2}</li>
            <li>${strMeasure3} ${strIngredient3}</li>
            <li>${strMeasure4} ${strIngredient4}</li>
            <li>${strMeasure5} ${strIngredient5}</li>
            <li>${strMeasure6} ${strIngredient6}</li>
            <li>${strMeasure7} ${strIngredient7}</li>
            <li>${strMeasure8} ${strIngredient8}</li>
            <li>${strMeasure9} ${strIngredient9}</li>
            <li>${strMeasure10} ${strIngredient10}</li>
            <li>${strMeasure11} ${strIngredient11}</li>
            <li>${strMeasure12} ${strIngredient12}</li>
            <li>${strMeasure13} ${strIngredient13}</li>
            <li>${strMeasure14} ${strIngredient14}</li>
            <li>${strMeasure15} ${strIngredient15}</li>
            <li>${strMeasure16} ${strIngredient16}</li>
            <li>${strMeasure17} ${strIngredient17}</li>
            <li>${strMeasure18} ${strIngredient18}</li>
            <li>${strMeasure19} ${strIngredient19}</li>
            <li>${strMeasure20} ${strIngredient20}</li>
          </ul>
          <p class="copyright">&copy; Copyright All Right Reserved By Farhan</p>
        </div>
  `;

  modalContainer.appendChild(modal);

  // hide modal
  document.getElementById("cross__icon").addEventListener("click", () => {
    modalContainer.style.display = "none";
    modalContainer.textContent = "";
  });
};

{
  /* <p>${strInstructions.slice(0, 450)}</p> */
}
