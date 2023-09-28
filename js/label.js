

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

function download(file) {
  const link = document.createElement('a')
  const url = URL.createObjectURL(file)

  link.href = url
  link.download = file.name
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

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
    let started = document.getElementById("started").value;
    let bottled = document.getElementById("bottled").value;
    let notes = document.getElementById("notes").value;
    let mead = {}
    console.log(started +"\n"+ bottled)
      
    for(let i=0; i<ingredients.length; i++){
      ingredientList.push(ingredients[i].textContent)
    }
    console.log(ingredientList);
    addToLocalStorage(ingredientList)

    createFile(name,abv,honey,ingredientList,started,bottled,notes)
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

  function createFile(name,abv,honey,ingredientList,started,bottled,notes){
    let fileContent=[name+"\n",abv+"\n",honey+"\n",ingredientList+"\n",started+"\n",bottled+"\n",notes]
    
    const file = new File(fileContent, name+'.txt', {
      type: 'text/plain',
    })
    download(file);
  }
  

