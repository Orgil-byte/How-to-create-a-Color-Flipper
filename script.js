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

const colorChange = (id) => {
  let randomColor;
  if (id === 1) {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    displayColorName.textContent = `#` + randomColor;
    body.style.backgroundColor = `#` + randomColor;
    return;
  }
  if (id === 2) {
    const randomNum = Math.floor(Math.random() * colorNames.length);
    randomColor = colorNames[randomNum];
    displayColorName.textContent = " " + randomColor;
    body.style.backgroundColor = " " + randomColor;
    return;
  }
};

hexCat.addEventListener(`click`, colorChange(1));
simpleCat.addEventListener(`click`, colorChange(2));
btn.addEventListener(`click`, colorChange);
