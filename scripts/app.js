const inputFields = document.querySelectorAll(".input-amount");
const resetBtn = document.getElementById("reset-button");
const tipButton = document.querySelectorAll(".tip-buttons");

const [billInput, peopleInput, tipInput] = [
  parseFloat(document.getElementById("bill-input").value),
  parseFloat(document.getElementById("people-input").value),
  parseFloat(document.getElementById("tip-custom").value),
];

// inputFields.forEach((element) => {
//   element.addEventListener("input", (e) => {
//     // save input number
//     tipCalc(billInput, peopleInput, tipInput);
//     handleError(billInput, peopleInput);
//   });
// });

function registerEventListener(element, event, callback) {
  return element.addEventListener(event, (e) => {
    callback(e);
  });
}

registerEventListener(inputFields, "input", tipCalc);
registerEventListener(inputFields, "input", handleError);
registerEventListener(resetBtn, "click", resetButton);

// tip buttons
function getTip() {}

tipButton.forEach((element) => {
  element.addEventListener("click", function tipButton(event) {
    const tip = parseFloat(event.target.innerText.replace("%", ""));
    tipCalc(billInput, peopleInput, tip);
    console.log(tip);
  });
});

// calculate tip
function tipCalc(bill, people, callback) {
  const tipAmount = bill * (callback / 100);
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
  const billError = document.getElementById("bill-error");
  const peopleError = document.getElementById("people-error");
  if (bill < 1) {
    billError.style.display = "block";
  } else {
    billError.style.display = "none";
  }
  if (people < 1) {
    peopleError.style.display = "block";
  } else {
    peopleError.style.display = "none";
  }
}

// reset button
function resetButton() {
  inputFields.forEach((element) => (element.value = ""));
  document.getElementById("tip-amount").innerHTML = "$0.00";
  document.getElementById("total-amount").innerHTML = "$0.00";
  document.getElementById("tip-custom").innerHTML = "Custom";
}

// print price
