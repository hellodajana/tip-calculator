// save input number

const inputFields = document.querySelectorAll(".input-amount");
inputFields.forEach((element) => {
  element.addEventListener("input", handleInput);
});

const [billInput, peopleInput] = [
  parseFloat(document.getElementById("bill-input").value),
  parseFloat(document.getElementById("people-input").value),
];

function handleInput() {
  //   console.log(billInput, peopleInput);
  // if zero, add red border and display:block error
  if (billInput < 1) {
    document.getElementById("bill-error").style.display = "block";
  }
  if (peopleInput < 1) {
    document.getElementById("people-error").style.display = "block";
  }
  tipCalc(billInput, peopleInput);
}

// calculate tip

function tipCalc(bill, people) {
  const tipValue = 20;
  let tipAmount = (bill * tipValue) / people;
  let totalAmount = (bill + tipAmount) / people;
  document.getElementById("tip-amount").innerHTML = "$" + tipAmount.toFixed(2);
  document.getElementById("total-amount").innerHTML =
    "$" + totalAmount.toFixed(2);
}

// save amount as innerHTML

//reset button
