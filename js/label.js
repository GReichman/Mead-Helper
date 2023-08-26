
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
  
  });

  function addIngredient(){
   let ingredient = document.getElementById("fruitSelect");
   let newIngredient = document.getElementById("newIngredient");
   let amount = document.getElementById("amount")
    let result="";
   if(ingredient.value !="default"){
    console.log(ingredient.value)
    result = ingredient.value;
   }
   else{
    console.log(newIngredient.value)
    result = newIngredient.value;
   }
   let ingredientList = document.getElementById("ingredients");
   let newItem = document.createElement("li");
   let name = document.createElement("span");
   let ounces = document.createElement("span");
   name.textContent=result;
   name.className=("ingredientSpan")
   ounces.textContent= amount.value + " oz"
   ounces.className=("amountSpan")
   newItem.append(name)
   newItem.append(ounces)
   ingredientList.append(newItem);

   ingredient.value="default";
   newIngredient.value="";
   amount.value="";
  }
  
  function submitForm(){
    let name = document.getElementById("meadName").value;
    let abv = document.getElementById("abv").value;
    let honey = document.getElementById("honey").value;
    let ingredients;
    let started = document.getElementById("started")
    let bottled = document.getElementById("bottled").value;
    let notes = document.getElementById("notes").value;

     let mead = {}
      
  }
  
// function importIngredients() {
//     fs.readFile('ingredients.txt', (err, data) => {
//    if (err) throw err;
//       console.log(data.toString());
// })
// }

// importIngredients();