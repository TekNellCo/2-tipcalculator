let price = document.querySelector('.price');
let percent = document.querySelector('.percent');
let submitButton = document.querySelector('.submit');
let total = document.querySelector('.total');
let inputs = document.querySelectorAll('.input');

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.select();
  });
});

submitButton.addEventListener('click', calculate);

function calculate(e) {
  e.preventDefault();
  if (price.value === '' || percent.value === '') {
    return;
  }
  let priceInput = parseFloat(price.value);
  let percentInput = parseFloat(percent.value);
  let totalAmount = priceInput + (priceInput * percentInput) / 100;
  roundAppend(totalAmount);
}

function roundAppend(value) {
  let totalAmountRounded = Math.floor(value * 100) / 100;
  total.textContent = `$${totalAmountRounded}`;
}
