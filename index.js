//Write JS code here
//Psuedocode:

/*
table: references the "tableBody" of the "cocktailsTable" in index.html.
filter: References the innerText of the text field in index.html.
*/

//Global scope variables:
const table = document.getElementById("tableBody");
const filter = document.getElementById("drink").innerText; //The innerText of the text field;


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded");
    const searchBtn = document.querySelector("#search");
})


/*
function loadTable(){
    let tableUrl = "www.thecocktaildb.com/api/json/v1/1/search.php?s="; //The url, except for the search word.

    //Fetch table data
    fetch(`tableUrl${filter}`, {
        method: 'GET',
    })
    .then(response => response.json()) //Converts response to JSON
    .then(data => {
        //
    })
}*/


function tableSubmit(event){
    event.preventDefault(); //Prevent reloading of page.
    loadTable();
}


let drinkForm = document.getElementById("drink-form");
drinkForm.addEventListener("submit", tableSubmit);

//Use addEventListener("change", ()=>{}) to change filter with text field's innerText
document.addEventListener("change", () => {
    filter = getElementById("drink").innerText;
})