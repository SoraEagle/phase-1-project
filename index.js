//Write JS code here
//Psuedocode:

/*
Descriptions:
    table: references the "tableBody" of the "cocktailsTable" in index.html.
    input: the text field in the form used to generate the table of search results.
    filter: References variable "input" in index.html; Used to complete the URL for the fetch.
    tableUrl: the URL for the JSON, except for the search word (filter).
    completeUrl: the entire URL to be used for the fetch.
*/

//Global scope variables: See Descriptions above for more information.
const table = document.getElementById("tableBody");
let input = document.getElementById("drink");
filter = input.value;


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded");
    const searchBtn = document.querySelector("#search");
})


function loadTable(){
    let tableUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    let completeUrl = `tableUrl${filter}`; //The URL used to fetch the search results.

    //Fetch table data
    fetch(tableUrl, { //Find way to change to completeUrl without errors!!!
        method: 'GET',
    })
    .then(response => response.json()) //Converts response to JSON
    .then(data => {
        // debugger;
        // console.log(data);
        /*
        strDrink: Drink Name (String)
        strDrinkThumb: Drink Image (String)
        strAlcoholic: Alcoholic?(boolean)
        strIngredient1, strIngredient2, ... strIngredient15: Ingredients (String)
        */

       //
    })
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