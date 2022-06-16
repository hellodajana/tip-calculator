const inputFields = document.querySelectorAll(".input-amount");
inputFields.forEach((element) => {
  element.addEventListener("input", (e) => {
    // save input number
    const [billInput, peopleInput] = [
      parseFloat(document.getElementById("bill-input").value),
      parseFloat(document.getElementById("people-input").value),
    ];
    tipCalc(billInput, peopleInput);
    handleError(billInput, peopleInput);
  });
});

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

function tipCalc(bill, people) {
  // calculate tip
  const tipValue = 20;
  let tipAmount = bill * (tipValue / 100);
  let tipAmountPerPerson = tipAmount / people;
  let totalAmount = (tipAmount + bill) / people;
  // save amount as innerHTML
  document.getElementById("tip-amount").innerHTML =
    "$" + tipAmountPerPerson.toFixed(2);
  document.getElementById("total-amount").innerHTML =
    "$" + totalAmount.toFixed(2);
}

//reset button
