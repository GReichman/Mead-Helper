document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");

});

function submitForm(){
    console.log("test");
    let water = parseInt(document.getElementById("water_content").value)
    let honey = parseInt(document.getElementById("honey_content").value)
    let sugar = parseInt(document.getElementById("added_sugar").value)
    console.log(water+" "+honey+" "+sugar);

    let potentialABV = water+honey+sugar;

    document.getElementById("output").textContent += potentialABV+"% ABV";
    
}


