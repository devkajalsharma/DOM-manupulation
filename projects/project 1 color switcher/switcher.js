
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

// method 1---------------------------------------------

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        body.style.backgroundColor = e.target.id
        console.log(e.target)
    })

})

// method 2--------------------------------------------

// buttons.forEach(function (button) {
//     button.addEventListener("click", function (e) {
//         if (e.target.id === "orange") {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === "red") {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === "green") {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === "purple") {
//             body.style.backgroundColor = e.target.id
//         }
//         console.log(e.target)
//     })
// })



