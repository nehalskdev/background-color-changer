"strict mode";

const btn = document.querySelector(".center-button");
const colorBox = document.getElementById("colorBox");

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

const initialBox = (colorBox.style.visibility = "hidden");

btn.addEventListener("click", () => {
  const color = randomColor();
  document.body.style.backgroundColor = color;
  colorBox.style.visibility = "visible";
  colorBox.value = color;
});
