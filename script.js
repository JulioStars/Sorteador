let numberQuantity = document.querySelector(".number-choice-one")
let numberMin = document.querySelector(".number-choice-two")
let numberMax = document.querySelector(".number-choice-three")
const classNumbers = document.querySelector(".numbers")
const showResult = document.querySelector(".show-results")
const hiddenSorter = document.querySelector(".content-form")

const submit = document.querySelector("form button")
const reset = document.querySelector(".show-results button")

submit.addEventListener("click", (event) => {
  event.preventDefault()

  function sortearNumeros(quantity, valueMin, valueMax) {
    let numerosSorteados = new Set();
  
    while (numerosSorteados.size < quantity) {
      let numero = Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin;
      numerosSorteados.add(numero);
    }
  
    return Array.from(numerosSorteados);
  }

  const quantity = Number(numberQuantity.value)
  const valueMin = Number(numberMin.value)
  const valueMax = Number(numberMax.value)

  if (quantity > 0 && valueMin < valueMax) {
    let resultado = sortearNumeros(quantity, valueMin, valueMax);

    function addNumbers() {
      const spanNumber = document.createElement("span")
      spanNumber.append(resultado)
      const divClassNumber = document.createElement("div")
      divClassNumber.classList.add("number")
      divClassNumber.append(spanNumber)
      classNumbers.append(divClassNumber)
    }
  } else {
    alert("Insira valores válidos!");
  }

  addNumbers()

  showResult.classList.remove("display-show")
  hiddenSorter.classList.add("display-show")
  numberQuantity.value = ""
  numberMin.value = ""
  numberMax.value = ""
})

reset.addEventListener("click", (event) => {
  event.preventDefault()

  showResult.classList.add("display-show")
  hiddenSorter.classList.remove("display-show")
  classNumbers.innerHTML = ""
})