"strict mode";
const css = document.querySelector(`.css`);
const cssBtn = document.querySelector(`.css-btn`);

cssBtn.addEventListener(`click`, function () {
  css.classList.remove(`css`);
});
