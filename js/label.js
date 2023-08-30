let ingredientArray=[];
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
    let currentStorage = localStorage.getItem("Ingredients")
    if(currentStorage){
      ingredientArray = JSON.parse(currentStorage);
    }
    else{
      localStorage.setItem("Ingredients",JSON.stringify([]))
    }
  console.log(ingredientArray)
  loadPreviousIngredients()
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
    let button = document.createElement("button");
    button.textContent = "X";
    button.className=("buttonx"); 
    button.onclick = function(){
      this.parentElement.remove();
    }
    name.textContent=result;
    name.className=("ingredientspan")
    ounces.textContent= amount.value + " oz"
    ounces.className=("amountspan")
    newItem.append(name)
    newItem.append(ounces)
    newItem.append(button)
    ingredientList.append(newItem);

    ingredient.value="default";
    newIngredient.value="";
    amount.value="";
  }
  
  function submitForm(){
    let name = document.getElementById("meadName").value;
    let abv = document.getElementById("abv").value;
    let honey = document.getElementById("honey").value;
    let ingredients= document.getElementsByClassName("ingredientspan");
    let ingredientList = [];
    let started = document.getElementById("started")
    let bottled = document.getElementById("bottled").value;
    let notes = document.getElementById("notes").value;
    let mead = {}
      
    for(let i=0; i<ingredients.length; i++){
      ingredientList.push(ingredients[i].textContent)
    }
    console.log(ingredientList);
    addToLocalStorage(ingredientList)
  }
  
  function addToLocalStorage(arr){
    arr.forEach(ele =>{
      if(!ingredientArray.includes(ele)){
        ingredientArray.push(ele)
      }
    });
    console.log(ingredientArray)
    localStorage.setItem("Ingredients",JSON.stringify(ingredientArray));
  }

  function loadPreviousIngredients(){
    ingredientArray.forEach(ele =>{
      let newOption = document.createElement("option");
      newOption.value = ele;
      newOption.textContent = ele;
      document.getElementById("fruitSelect").append(newOption)
    })
  }