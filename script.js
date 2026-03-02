let numbers = [];

const input = document.getElementById("numberInput");
const button = document.getElementById("analyzeBtn");
const result = document.getElementById("result");
const numbersList = document.getElementById("numberList");
const totalSum = document.getElementById("totalSum");

button.addEventListener("click", function() {
    let value = Number(input.value);
    numbers.push(value);

    if(value % 2 === 0){
        result.textContent = "The number " + value + " is Even";
    }
    else{
        result.textContent = "The number " + value + " is Odd";
    }

    numbersList.textContent = "Numbers: " + numbers.join(", ");


    let sum = 0;

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    totalSum.textContent = "Total Sum: " + sum;

    input.value = "";
});