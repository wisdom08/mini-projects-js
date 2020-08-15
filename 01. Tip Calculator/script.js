const output = document.querySelector(".output");
const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", function () {
  const cost = document.querySelector("input");
  console.log(cost.value * 0.15);

  let tip = (cost.value * 0.15).toFixed(2);
  let temp = `<h1>you should tip $${tip} on the $${cost.value}<h1>`;

  output.innerHTML = temp;
});
