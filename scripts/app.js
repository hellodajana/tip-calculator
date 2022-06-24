const [billInput, peopleInput] = [
  document.getElementById("bill-input"),
  document.getElementById("people-input"),
];
const resetBtn = document.getElementById("reset-button");

let bill = 0;
let tip = 0;
let people = 0;

// event listeners
billInput.addEventListener("input", () => {
  const billFormated = parseFloat(billInput.value);
  if (billFormated > 0) {
    bill = billFormated;
    tipCalc();
  } else {
    const billError = document.getElementById("bill-error");
    billError.style.display = "block";
  }
});
peopleInput.addEventListener("input", () => {
  const peopleFormated = parseFloat(peopleInput.value);
  if (peopleFormated > 0) {
    people = peopleFormated;
    tipCalc();
  } else {
    const peopleError = document.getElementById("people-error");
    peopleError.style.display = "block";
  }
});

resetBtn.addEventListener("click", resetButton);

const tipButton = document.querySelectorAll(".tip-buttons");
tipButton.forEach((element) => {
  element.addEventListener("click", (event) => {
    tip = parseFloat(event.target.innerText.replace("%", ""));
    tipCalc();
  });
  element.addEventListener("input", () => {
    tip = parseFloat(element.value);
    tipCalc();
  });
});

// functions
function tipCalc() {
  const tipAmount = bill * (tip / 100);
  const [tipAmountPerPerson, totalAmount] = [
    tipAmount / people,
    (tipAmount + bill) / people,
  ];
  console.log(tip, people, bill);
  console.log(tipAmount, tipAmountPerPerson, totalAmount);
  printAmount(tipAmountPerPerson, "tip-amount");
  printAmount(totalAmount, "total-amount");
}

function printAmount(amount, element) {
  if (bill > 0 && people > 0 && tip > 0) {
    document.getElementById(element).innerHTML = "$" + amount.toFixed(2);
  } else if (bill > 0 && people > 0) {
    document.getElementById(element).innerHTML = bill / people;
  } else if (bill > 0 && tip > 0) {
    document.getElementById(element).innerHTML = bill + tip;
  } else if (bill > 0 && people == "") {
    document.getElementById(element).innerHTML = bill;
  } else {
    document.getElementById(element).innerHTML = "0";
  }
}

function resetButton() {
  bill = 0;
  people = 0;
  tip = 0;
  const inputFields = document.querySelectorAll(".input-amount");
  inputFields.forEach((element) => (element.value = ""));
  document.getElementById("tip-amount").innerHTML = "$0.00";
  document.getElementById("total-amount").innerHTML = "$0.00";
  document.getElementById("tip-custom").innerHTML = "Custom";
}
