//Write JS code here
//Psuedocode:

/*
table: references the "tableBody" of the "cocktailsTable" in index.html.
filter: References the innerText of the text field in index.html.
*/

//Global scope variables:
const table = document.getElementById("tableBody");
let filter = document.getElementById("drink").innerText; //The innerText of the text field;


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded");
    const searchBtn = document.querySelector("#search");
})


function loadTable(){
    let tableUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"; //The url, except for search word.


    //Fetch table data
    fetch(tableUrl, {
        method: 'GET',
    })
    .then(response => response.json()) //Converts response to JSON
    .then(data => {
        // debugger;
        console.log(data);
    })
}


function deleteRows(){ //Function to delete rows before new table is generated
    //
}


function createRows(){ //Function to add rows of newly generated table
    //
}


function tableSubmit(event){
    event.preventDefault(); //Prevent reloading of page.
    loadTable();
}


let drinkForm = document.getElementById("drink-form");
drinkForm.addEventListener("submit", tableSubmit);

//Functon to use addEventListener("change", ()=>{}) to change filter with text field's innerText
function tableFilter(){
    document.addEventListener("change", () => {
        filter = getElementById("drink").innerText;
        return filter;
    })
}