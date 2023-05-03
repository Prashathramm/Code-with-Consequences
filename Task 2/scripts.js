const aumText = document.getElementById("aum-text");
const sizeSlider = document.getElementById("size-slider");
const rSlider = document.getElementById("r-slider");
const gSlider = document.getElementById("g-slider");
const bSlider = document.getElementById("b-slider");
const randomButton = document.getElementById("random-button");
const getRGB = document.getElementById("getRGB");

const body = document.querySelector("body");

sizeSlider.addEventListener("input", () => {
  const sizeValue = sizeSlider.value;
  aumText.style.fontSize = `${sizeValue}px`;
});

rSlider.addEventListener("input", () => {
  const rValue = rSlider.value;
  const gValue = gSlider.value;
  const bValue = bSlider.value;
  const color = `rgb(${rValue}, ${gValue}, ${bValue})`;
  aumText.style.color = color;
  body.style.backgroundColor = getBestMatchingColor(rValue, gValue, bValue);
});

gSlider.addEventListener("input", () => {
  const rValue = rSlider.value;
  const gValue = gSlider.value;
  const bValue = bSlider.value;
  const color = `rgb(${rValue}, ${gValue}, ${bValue})`;
  aumText.style.color = color;
  body.style.backgroundColor = getBestMatchingColor(rValue, gValue, bValue);
});

bSlider.addEventListener("input", () => {
  const rValue = rSlider.value;
  const gValue = gSlider.value;
  const bValue = bSlider.value;
  const color = `rgb(${rValue}, ${gValue}, ${bValue})`;
  aumText.style.color = color;
  body.style.backgroundColor = getBestMatchingColor(rValue, gValue, bValue);
});

randomButton.addEventListener("click", () => {
  // Generate random color and size values
  const rValue = Math.floor(Math.random() * 256);
  const gValue = Math.floor(Math.random() * 256);
  const bValue = Math.floor(Math.random() * 256);
  const color = `rgb(${rValue}, ${gValue}, ${bValue})`;
  aumText.style.color = color;
  body.style.backgroundColor = getBestMatchingColor(rValue, gValue, bValue);
});

getRGB.addEventListener("click", () => {
  alert(
    `Red : ${rSlider.value} Green : ${gSlider.value} Blue : ${bSlider.value}`
  );
});

function getBestMatchingColor(rValue, gValue, bValue) {
  const rNew = 255 - rValue;
  const gNew = 255 - gValue;
  const bNew = 255 - bValue;

  return `rgb(${rNew}, ${gNew}, ${bNew})`;
}
