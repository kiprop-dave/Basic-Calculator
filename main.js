const trial = document.getElementById("query");
const output = document.getElementsByClassName("result")[0];
const display = document.getElementsByClassName("status")[0];
const seven = document.getElementsByClassName("item2")[0];
const eight = document.getElementsByClassName("item3")[0];
const nine = document.getElementsByClassName("item4")[0];
const divide = document.getElementsByClassName("item5")[0];
const four = document.getElementsByClassName("item6")[0];
const five = document.getElementsByClassName("item7")[0];
const six = document.getElementsByClassName("item8")[0];
const times = document.getElementsByClassName("item9")[0];
const delet = document.getElementsByClassName("item10")[0];
const one = document.getElementsByClassName("item11")[0];
const two = document.getElementsByClassName("item12")[0];
const three = document.getElementsByClassName("item13")[0];
const minus = document.getElementsByClassName("item14")[0];
const zero = document.getElementsByClassName("item15")[0];
const point = document.getElementsByClassName("item16")[0];
const plus = document.getElementsByClassName("item17")[0];
const equals = document.getElementsByClassName("item18")[0];
const clear = document.getElementsByClassName("item19")[0];
const result = document.getElementById("output");

seven.addEventListener("click", () => {
  display.textContent += seven.value;
});

eight.addEventListener("click", () => {
  display.textContent += eight.value;
});

nine.addEventListener("click", () => {
  display.textContent += nine.value;
});

four.addEventListener("click", () => {
  display.textContent += four.value;
});

five.addEventListener("click", () => {
  display.textContent += five.value;
});

six.addEventListener("click", () => {
  display.textContent += six.value;
});

one.addEventListener("click", () => {
  display.textContent += one.value;
});

two.addEventListener("click", () => {
  display.textContent += two.value;
});

three.addEventListener("click", () => {
  display.textContent += three.value;
});

clear.addEventListener("click", () => {
  display.textContent = "";
  output.textContent = "";
});

times.addEventListener("click", () => {
  display.textContent += " * ";
});

divide.addEventListener("click", () => {
  display.textContent += " / ";
});

minus.addEventListener("click", () => {
  display.textContent += " - ";
});

zero.addEventListener("click", () => {
  display.textContent += zero.value;
});

point.addEventListener("click", () => {
  display.textContent += ".";
});

plus.addEventListener("click", () => {
  display.textContent += " + ";
});

equals.addEventListener("click", () => {
  let y = eval(trial.innerHTML);
  output.textContent = y;
});

delet.addEventListener("click", () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
});
