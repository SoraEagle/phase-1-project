//Write JS code here
//Psuedocode:

//Global scope variables:
const table = document.getElementById("tableBody");
const filter = document.getElementByID("drink").innerText; //The innerText of the text field;


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


/*
function tableSubmit(event){
    event.preventDefault(); //Prevent reloading of page.
    //
}*/

/*
let drinkForm = document.getElementsByTagName("form")[0];
drinkForm.addEventListener("submit", tableSubmit);
*/


//Use addEventListener("change", ()=>{}) to change search filter with text field's innerText
/*
document.addEventListener("change", () => {
    //
})*/