const inputFields = document.querySelectorAll(".input-amount");

const [billInput, peopleInput, tipInput] = [
  parseFloat(document.getElementById("bill-input").value),
  parseFloat(document.getElementById("people-input").value),
  parseFloat(document.getElementById("tip-custom").value),
];

inputFields.forEach((element) => {
  element.addEventListener("input", (e) => {
    // save input number
    tipCalc(billInput, peopleInput, tipInput);
    handleError(billInput, peopleInput);
  });
});

// tip buttons
document.querySelectorAll(".tip-buttons").forEach((element) => {
  element.addEventListener("click", function tipButton(event) {
    const tip = parseFloat(event.target.innerText.replace("%", ""));
    tipCalc(billInput, peopleInput, tip);
    console.log(tip);
  });
});

// calculate tip
function tipCalc(bill, people, tip) {
  const tipAmount = bill * (tip / 100);
  const [tipAmountPerPerson, totalAmount] = [
    tipAmount / people,
    (tipAmount + bill) / people,
  ];
  // save amount as innerHTML
  document.getElementById("tip-amount").innerHTML =
    "$" + tipAmountPerPerson.toFixed(2);
  document.getElementById("total-amount").innerHTML =
    "$" + totalAmount.toFixed(2);
}

// if error
function handleError(bill, people) {
  // if zero, add red border and display:block error
  if (bill < 1) {
    document.getElementById("bill-error").style.display = "block";
  } else {
    document.getElementById("bill-error").style.display = "none";
  }
  if (people < 1) {
    document.getElementById("people-error").style.display = "block";
  } else {
    document.getElementById("people-error").style.display = "none";
  }
}

// reset button
document.getElementById("reset-button").addEventListener("click", resetButton);

// reset button
function resetButton() {
  inputFields.forEach((element) => (element.value = ""));
  document.getElementById("tip-amount").innerHTML = "$0.00";
  document.getElementById("total-amount").innerHTML = "$0.00";
  document.getElementById("tip-custom").innerHTML = "Custom";
}

// print price
