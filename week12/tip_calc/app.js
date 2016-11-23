const tipA = document.querySelector('#tipAmount')
const totalPrice = document.querySelector('#total')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  let meal = document.querySelector('#meal').value
  let tipPercentage = document.querySelector('#tip').value
  let tipAmount = (tipPercentage / 100) * meal
  let total = Number(meal) + Number(tipAmount)
  tipA.innerHTML = `your amount to tip is: ${tipAmount.toFixed(2)}`
  totalPrice.innerHTML = `your total bill is: ${Math.ceil(total)}`
})
