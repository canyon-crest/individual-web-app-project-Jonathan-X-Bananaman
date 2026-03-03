// add javascript here
document.getElementById("show-facts").addEventListener("click", ()=>{
    document.getElementById("facts").toggleAttribute("hidden");
})

document.getElementById("add-recipe").addEventListener("click", ()=>{
    let lll=document.getElementById("recipe-input");
    let ppp=document.getElementById("recipe-list");
    if(lll.value.trim()!==""){
        const newItem = document.createElement("li");
        newItem.textContent = lll.value;
        ppp.appendChild(newItem);
        lll.value = "";
    }
})