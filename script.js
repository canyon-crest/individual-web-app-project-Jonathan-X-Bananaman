// add javascript here
document.getElementById("show-facts")?.addEventListener("click", ()=>{
    document.getElementById("facts").toggleAttribute("hidden");
})

document.getElementById("add-recipe")?.addEventListener("click", ()=>{
    let input=document.getElementById("recipe-input");
    let list=document.getElementById("recipe-list");
    if(input.value.trim()!==""){
        const newItem = document.createElement("li");
        newItem.textContent = input.value;
        list.appendChild(newItem);
        input.value = "";
    }
})