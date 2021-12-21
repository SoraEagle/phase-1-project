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
    drink: Object for the data.drinks variables being used.*/

//Global scope variables: See Descriptions above for more information.
const table = document.getElementById("tableBody");
let input = document.getElementById("drink");
let filter = input.value;
let cocktails = [];


document.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM has loaded");
    const searchBtn = document.querySelector("#search");
})


function loadTable(){ //Overall function for deleting old table, and generating new table from the filter.
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
        data.drinks[].strIngredient1, strIngredient2, ... strIngredient15: ingredients (Array of ingredients)*/

        cocktails = []; //Delete old Array.

        for(let i = 0; i < data.drinks.length; i++){
            let drink = { //Object of the cocktail.
                drinkName: data.drinks[i].strDrink,
                drinkImg: data.drinks[i].strDrinkThumb,
                alcoholic: data.drinks[i].strAlcoholic,
                ingredients: []
            };

            let allIng = Object.values(data.drinks[i]).slice(17, 32);

            allIng.forEach((ing) => {
                if(ing != null) drink.ingredients.push(ing);
            });

            cocktails.push(drink);
        }

       //Invoke deleteRows, then createRows:
       deleteRows();
       debugger;

       createRows();
       debugger;
    })
    return cocktails; //Update cocktails in the global scope.
}


function deleteRows(){ //Function to delete rows before new table is generated
    let rowCount = table.rows.length;
    for(let i = rowCount - 1; i > 0; i--){ //
        table.deleteRow(i);
    }
}


function createRows(){ //Function to add rows of newly generated table
    //Loop to create a row per drink from the search result
    // for(let i = 0; i < cocktails.length; i++){
    //     let newRow = table.insertRow(i);
    //     newRow.cells[0].value = cocktails[i].drinkName;
    // }
}


function tableSubmit(event){ 
    event.preventDefault(); //Prevent reloading of page.
    loadTable();
}


let drinkForm = document.getElementById("drink-form");
drinkForm.addEventListener("submit", tableSubmit); //Invoke the tableSubmit function with the search button.


    input.addEventListener("change", () => { //Event Listener to set filter = input.value (innerText).
        filter = input.value;
        return filter;
    });