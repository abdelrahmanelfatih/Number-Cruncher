let numbers = [];

const input = document.getElementById("numberInput");
const button = document.getElementById("analyzeBtn");
const result = document.getElementById("result");
const numbersList = document.getElementById("numberList");
const totalSum = document.getElementById("totalSum");
const clearBtn = document.getElementById("clearBtn");

button.addEventListener("click", function() {
    if (input.value === ""){
        result.textContent = "Please enter a number first.";
        return;
    }
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

    for (let number of numbers){
        sum += number;
    }

    totalSum.textContent = "Total Sum: " + sum;

    input.value = "";
});

clearBtn.addEventListener("click", function(){
    numbers = [];
    numbersList.textContent = "";
    totalSum.textContent = "";
    result.textContent = "";
});