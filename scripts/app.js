const inputFields = document.querySelectorAll(".input-amount");
const resetBtn = document.getElementById("reset-button");
const tipButton = document.querySelectorAll(".tip-buttons");
const tipInput = document.getElementById("tip-custom");

const [billInput, peopleInput] = [
  parseFloat(document.getElementById("bill-input").value),
  parseFloat(document.getElementById("people-input").value),
];

// event listeners
function registerEventListener(element, event, callback) {
  return element.addEventListener(event, (e) => {
    callback(e);
  });
}
registerEventListener(tipInput, "input", getCustomTip);
registerEventListener(resetBtn, "click", resetButton);

tipButton.forEach((element) => {
  registerEventListener(element, "click", getButtonTip);
});

inputFields.forEach((element) => {
  registerEventListener(element, "input", handleError);
});

// functions

const bill = function getBill() {};
const people = function getPeople() {};

function getCustomTip() {
  const tip = parseFloat(tipInput.value / 100);
  tipCalc(billInput, peopleInput, tip);
}

function getButtonTip(event) {
  tipButton.forEach((element) => {
    const tip = parseFloat(event.target.innerText.replace("%", ""));
    tipCalc(bill, peopleInput, tip);
  });
}

function tipCalc(bill, people, tip) {
  const tipAmount = bill * (tip / 100);
  const [tipAmountPerPerson, totalAmount] = [
    tipAmount / people,
    (tipAmount + bill) / people,
  ];
  printAmount(tipAmountPerPerson, "tip-amount");
  printAmount(totalAmount, "total-amount");
}

function printAmount(amount, element) {
  if (amount === "" || amount === NaN || amount === "undefined") {
    return 0;
  } else {
    document.getElementById(element).innerHTML = "$" + amount.toFixed(2);
  }
}

function handleError(bill, people) {
  const billError = document.getElementById("bill-error");
  const peopleError = document.getElementById("people-error");
  bill < 1
    ? (billError.style.display = "block")
    : (billError.style.display = "none");

  people < 1
    ? (peopleError.style.display = "block")
    : (peopleError.style.display = "none");
}

function resetButton() {
  inputFields.forEach((element) => (element.value = ""));
  document.getElementById("tip-amount").innerHTML = "$0.00";
  document.getElementById("total-amount").innerHTML = "$0.00";
  document.getElementById("tip-custom").innerHTML = "Custom";
}
