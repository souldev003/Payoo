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
  const transferMoney = document.getElementById("transfer-money-section");
  const couponBonus = document.getElementById("get-bonus-section");
  const payBill = document.getElementById("pay-bill-section");
  const transaction = document.getElementById("transaction-section");

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  transferMoney.classList.add("hidden");
  couponBonus.classList.add("hidden");
  payBill.classList.add("hidden");
  transaction.classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
