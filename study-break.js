const minutesInput = document.querySelector("#minutes");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", function () {
  const text = minutesInput.value.trim();
  const minutes = Number(text);

  if (text === "" || isNaN(minutes)) {
    result.textContent = "Error: Please enter the number of minutes you have studied.";
  } else if (minutes < 0) {
    result.textContent = "Error: Minutes cannot be negative.";
  } else if (minutes < 25) {
    result.textContent = "Keep going!";
  } else if (minutes < 50) {
    result.textContent = "Take a 5-minute break.";
  } else if (minutes < 90) {
    result.textContent = "Take a 10-minute break.";
  } else {
    result.textContent = "Take a longer break and recharge.";
  }
});
