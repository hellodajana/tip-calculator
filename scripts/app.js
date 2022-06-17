const inputFields = document.querySelectorAll(".input-amount");

inputFields.forEach((element) => {
  element.addEventListener("input", (e) => {
    // save input number
    const [billInput, peopleInput, tipInput] = [
      parseFloat(document.getElementById("bill-input").value),
      parseFloat(document.getElementById("people-input").value),
      parseFloat(document.getElementById("tip-custom").value),
    ];
    console.log(tipInput);
    tipCalc(billInput, peopleInput);
    handleError(billInput, peopleInput);
  });
});

// reset button
document.getElementById("reset-button").addEventListener("click", resetButton);

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

// tip buttons
document.querySelectorAll(".tip-buttons").forEach((element) => {
  element.addEventListener("click", function tipButton(event) {
    console.log(event.target.innerText);
  });
});

function tipCalc(bill, people) {
  // calculate tip
  const tipValue = 20;
  let tipAmount = bill * (tipValue / 100);
  let [tipAmountPerPerson, totalAmount] = [
    tipAmount / people,
    (tipAmount + bill) / people,
  ];
  // save amount as innerHTML
  document.getElementById("tip-amount").innerHTML =
    "$" + tipAmountPerPerson.toFixed(2);
  document.getElementById("total-amount").innerHTML =
    "$" + totalAmount.toFixed(2);
}

function resetButton() {
  inputFields.forEach((element) => (element.value = ""));
  document.getElementById("tip-amount").innerHTML = "$0.00";
  document.getElementById("total-amount").innerHTML = "$0.00";
}
