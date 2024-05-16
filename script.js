let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    alert("You just clicked there!")
})
btn.addEventListener("dblclick", () => {
    alert("You just double-clicked there!")
})
btn.addEventListener("mouseover", () => {
    alert("You just moved in!")
})

btn.addEventListener("mouseout", () => {
    alert("You just moved out!")
})


