const btn = document.getElementById(`btn`);
const displayColorName = document.querySelector(`.generator-color`);
const simpleCat = document.querySelector(`.hex-label`);
const hexCat = document.querySelector(`.hex`);
const body = document.querySelector(`.center`);
const colorNames = [
  `red`,
  `blue`,
  `black`,
  `cyan`,
  `white`,
  `brown`,
  `green`,
  `yellow`,
  `orange`,
  `purple`,
  `gray`,
  `pink`,
  `teal`,
  `maroon`,
  `gold`,
  `silver`,
  `turquoise`,
  `navy blue`,
  `magenta`,
  `olive`,
];

let currentMode = `simple`;

simpleCat.addEventListener(
  `click`,
  (modeChange = () => {
    currentMode === `simple`;
  })
);

hexCat.addEventListener(
  `click`,
  (modeChange = () => {
    currentMode === `hex`;
  })
);

const colorChange = () => {
  if (currentMode === `hex`) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    displayColorName.textContent = `#` + randomColor;
    body.style.backgroundColor = `#` + randomColor;
    return;
  }
  if (currentMode === `simple`) {
    const randomNum = Math.floor(Math.random() * colorNames.length);
    const randomColor = colorNames[randomNum];
    displayColorName.textContent = " " + randomColor;
    body.style.backgroundColor = " " + randomColor;
    return;
  }
};

btn.addEventListener(`click`, colorChange);
