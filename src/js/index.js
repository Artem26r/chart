let czInput = document.getElementById("cz");
let countCz = document.getElementById("char-2__count_cz");
let barchartCz = document.getElementById("barchartCz");

let forecastInput = document.getElementById("forecast");
let countForecas = document.getElementById("char-2__count_forecast");
let barchartForecast = document.getElementById("barchartForecast");

let differenceCount = document.querySelector(".chart-2__difference-count");
let differenceCollor = document.querySelector(".chart-2__difference")

let arrDifferenceCount = ["200", "340"];

let valueDifferenceCount = () => {
  result = arrDifferenceCount.reduce(
    (subtrаct, current) => subtrаct - current
  );

  if(result > 0) {
    differenceCount.innerText = result;
    differenceCollor.classList.remove('negative')
  } else {
    differenceCount.innerText = result;
    differenceCollor.classList.add('negative')
  }
};

czInput.addEventListener("change", function () {
  countCz.innerText = this.value + ".0";
  barchartCz.style = `min-height: ${this.value / 2}px`;
  arrDifferenceCount[1] = this.value;

  valueDifferenceCount()
});
forecastInput.addEventListener("change", function () {
  countForecas.innerText = this.value + ".0";
  barchartForecast.style = `min-height: ${this.value / 2}px`;
  arrDifferenceCount[0] = this.value;

  valueDifferenceCount()
});
