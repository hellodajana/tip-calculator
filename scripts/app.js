// save input number

const inputFields = document.querySelectorAll(".input-amount");
inputFields.forEach((element) => {
  element.addEventListener("input", handleInput);
});

function handleInput() {
  const [billInput, peopleInput] = [
    parseFloat(document.getElementById("bill-input").value),
    parseFloat(document.getElementById("people-input").value),
  ];
  //   console.log(billInput, peopleInput);
  // if zero, add red border and display:block error
  if (billInput < 1) {
    document.getElementById("bill-error").style.display = "block";
  }
  if (peopleInput < 1) {
    document.getElementById("people-error").style.display = "block";
  }
}

// calculate tip

// save amount as innerHTML

//reset button
