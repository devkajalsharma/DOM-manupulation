const form = document.querySelector('form')
// console.log(form)
const li = document.createElement('li');
const weightQuides = document.querySelector('#weight-quides').appendChild(li)


form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');


    if (height == "" || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`
    }
    if (weight == "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${BMI} is your BMI</span>`


        // Create BMI category
        let category = "";
        if (BMI < 18.5) {
            category = "Underweight";

        } else if (BMI >= 18.5 && BMI < 24.9) {
            category = "Normal Weight";
        } else if (BMI >= 25 && BMI < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        // Display BMI category
        const categoryMessage = `You are ${category}`;

        li.textContent = categoryMessage;
        if (category === "normal weight") {
            li.style.color = "yellow"
        } else {
            li.style.color = "red"
        }


    }

})
