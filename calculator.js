const textbox = document.getElementById("screen");

function handleClick(button) {
    var btnText = button.textContent;

    const validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", "/", "+", "-", "."];

    if (validValues.includes(btnText)) {
        digitInput(btnText);
    } else if (btnText === "C") {
        clearScreen();
    } else if (btnText === "=") {
        computeScreen();
    }
}

function digitInput(digit) {
    const maxLength = 16;

    if (textbox.value.length < maxLength) {
        textbox.value += digit;
    }
}

function clearScreen() {
    textbox.value = "";
}

function computeScreen() {
    try {
        var answer = eval(textbox.value);

        if (answer === "undefined") {
            textbox.value = "Syntax error";
            return;
        } else if (answer === Infinity) {
            textbox.value = "Math Error";
            return;
        }

        textbox.value = answer;
    }

    catch (error) {
        textbox.value = error.name;
        console.log(error.name);
    }
}
