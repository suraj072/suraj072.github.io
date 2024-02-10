//calulator program
const display = document.getElementById('display');
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
  // Get the current display value
  const displayValue = document.getElementById("display").value;

  // Check if there is anything to delete
  if (displayValue.length > 0) {
    // Remove the last character
    const newDisplayValue = displayValue.slice(0, -1);

    // Update the display with the new value
    document.getElementById("display").value = newDisplayValue;
  }
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}
