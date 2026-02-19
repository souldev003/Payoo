function getValueFromInput(id) {
  const input = document.getElementById(id);
  const inputValue = input.value;
  return inputValue;
}

function getBalance(id) {
  const balanceElement = document.getElementById(id);
  const balance = balanceElement.innerText;
  return balance;
}

//ShowElement By Clicking
function showElement(id) {
  const addMoney = document.getElementById("add-money-section");
  const cashOut = document.getElementById("cash-out-section");

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
