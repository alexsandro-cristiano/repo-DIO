let count = 0

const CURRENT_NUMBER = document.getElementById('currentNumber')

function zerar() {
  count = 0
  activeNumberNegative(count)
  CURRENT_NUMBER.innerHTML = count
}

function increment() {
  count++
  activeNumberNegative(count)
  CURRENT_NUMBER.innerHTML = count
}

function decrement() {
  count--
  activeNumberNegative(count)
  CURRENT_NUMBER.innerHTML = count
}

function activeNumberNegative(count) {
  if (count < 0) {
    CURRENT_NUMBER.classList.add('negative')
  } else {
    CURRENT_NUMBER.classList.remove('negative')
  }
}
