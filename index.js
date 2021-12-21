//Write JS code here
//Psuedocode:

/*
Descriptions:
    table: references the 'tableBody' of the 'cocktailsTable' in index.html.
    input: the text field in the form used to generate the table of search results.
    filter: References variable 'input' in index.html; Used to complete the URL for the fetch.
    completeUrl: the entire URL to be used for the fetch; Includes 'filter' at the very end.
    ingredients: list of each drink's ingredients.
    cocktails: Array for the 'drink' Objects.
    drink: Object for the data.drinks variables being used.
*/

//Global scope variables: See Descriptions above for more information.
const table = document.getElementById("tableBody");
let input = document.getElementById("drink");
let filter = input.value;

let cocktails = []; //Array of Objects; In global to be used in createRows().


document.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM has loaded");
    const searchBtn = document.querySelector("#search");
})


function loadTable(){
    let completeUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`;

    fetch(completeUrl, { 
        method: 'GET',
    })
    .then(response => response.json()) //Converts response to JSON
    .then(data => {
        /*
        data.drinks[].strDrink: drinkName
        data.drinks[].strDrinkThumb: drinkImag 
        data.drinks[].strAlcoholic: alcoholic
        data.drinks[].strIngredient1, strIngredient2, ... strIngredient15: ingredients (Array of ingredients)
        */


        cocktails = []; //Delete old Array of drink Objects.

        for(let i = 0; i < data.drinks.length; i++){
            let drink = { //Object of the cocktail.
                drinkName: data.drinks[i].strDrink,
                drinkImg: data.drinks[i].strDrinkThumb,
                alcoholic: data.drinks[i].strAlcoholic,
                ingredients: []
            };

            drink.ingredients.push( //Too repetitive?
                data.drinks[i].strIngredient1, 
                data.drinks[i].strIngredient2, 
                data.drinks[i].strIngredient3, 
                data.drinks[i].strIngredient4,
                data.drinks[i].strIngredient5, 
                data.drinks[i].strIngredient6,
                data.drinks[i].strIngredient7,
                data.drinks[i].strIngredient8,
                data.drinks[i].strIngredient9,
                data.drinks[i].strIngredient10,
                data.drinks[i].strIngredient11,
                data.drinks[i].strIngredient12,
                data.drinks[i].strIngredient13,
                data.drinks[i].strIngredient14,
                data.drinks[i].strIngredient15);

            cocktails.push(drink);
        }

       //Invoke deleteRows, then createRows:
       deleteRows();
       debugger;

       createRows();
       debugger;
    })
    return cocktails; //Update cocktails in the global scope
}


function deleteRows(){ //Function to delete rows before new table is generated
    //Use a for loop or for each loop
}


function createRows(){ //Function to add rows of newly generated table
    let t = document.getElementById("cocktailsTable"); //Reference to the Cocktails Table.

    //Loop to create a row per drink from the search result
}


function tableSubmit(event){ //Function to ...
    event.preventDefault(); //Prevent reloading of page.
    loadTable();
}

let drinkForm = document.getElementById("drink-form");
drinkForm.addEventListener("submit", tableSubmit); //Invoke the tableSubmit function with the search button.


    input.addEventListener("change", () => { //Event Listener to set filter = input.value (innerText).
        filter = input.value;
        return filter;
    });