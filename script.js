const btn = document.getElementById(`btn`);
const displayColorName = document.querySelector(`.generator-color`);
const colorLabel = document.querySelector(`.color-label`);
const hexLabel = document.querySelector(`.hex-label`);
const body = document.querySelector(`.center`);

const colorChange = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  displayColorName.textContent = `#` + randomColor;
  body.style.backgroundColor = `#` + randomColor;
};

btn.addEventListener(`click`, colorChange);
