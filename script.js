// Get elements
let display = document.getElementById("calc-display");
let form = document.querySelector(".form");
let nameBox = document.querySelector(".namebox");
let resultBox = document.querySelector(".resultbox");
let errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.innerText = "⚠️ Please enter your name!";
form.appendChild(errorMessage); // Add error message below input

// Function to handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let name = nameBox.value.trim();

    if (name === "") {
        errorMessage.style.display = "block"; // Show error
        return;
    }

    errorMessage.style.display = "none"; // Hide error
    resultBox.innerText = `🎉 Welcome, ${name}!`;
    resultBox.style.display = "block";
    form.style.display = "none"; // Hide form after submission
});

// Calculator functions
function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    let lastChar = display.value.trim().slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) return;
    display.value += ` ${operator} `;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
