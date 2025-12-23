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

simpleCat.addEventListener(`click`, () => {
  currentMode = `simple`;
  simpleCat.style.color = `rgb(75, 171, 209)`;
  hexCat.style.color = ``;
});

hexCat.addEventListener(`click`, () => {
  currentMode = `hex`;
  hexCat.style.color = `rgb(75, 171, 209)`;
  simpleCat.style.color = ``;
});

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
    displayColorName.textContent = randomColor;
    body.style.backgroundColor = randomColor;
    return;
  }
};

btn.addEventListener(`click`, colorChange);
