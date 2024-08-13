// const accordToggle = document.getElementById("accord-toggle")
// const accordion= document.getElementById("accordion")
// accordToggle.addEventListener("click", () =>{
//         accordion.classList.toggle("show-accord")
//         console.log("click")
//     }
// )

// const accordToggle = document.getElementById("accord-toggle");
// const accordion= document.getElementById("accordion");



const toggles = document.querySelectorAll("#accord-toggle");


toggles.forEach((accordion) =>{
    accordion.addEventListener("click", () => {
        accordion.nextElementSibling.classList.toggle("show-accord");
    });
})


