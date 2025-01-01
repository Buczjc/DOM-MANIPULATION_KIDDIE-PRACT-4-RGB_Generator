let rgb = [0, 0, 0];

function generateRandomNum(r, g, b) {
  let randomNumforR = Math.floor(Math.random() * 256) + r;
  let randomNumforG = Math.floor(Math.random() * 256) + g;
  let randomNumforB = Math.floor(Math.random() * 256) + b;
  let newRandomRGBGenerated = [randomNumforR, randomNumforG, randomNumforB];
  return newRandomRGBGenerated;
}

let rgb_color_box = document.querySelector(".rgb_color_box");
let generateNewRGBColorsBTN = document.getElementById("rgb_gen_btn");
let redTextContent = document.getElementById("red");
let greenTextContent = document.getElementById("green");
let blueTextContent = document.getElementById("blue");

generateNewRGBColorsBTN.addEventListener("click", () => {
  let generateRandomRGBLolz = generateRandomNum(rgb[0], rgb[1], rgb[2]);
  rgb_color_box.style.backgroundColor = `rgb(${generateRandomRGBLolz})`;
  redTextContent.textContent = generateRandomRGBLolz[0] + ",";
  greenTextContent.textContent = generateRandomRGBLolz[1] + ",";
  blueTextContent.textContent = generateRandomRGBLolz[2];
});
