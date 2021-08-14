/* - First variant - */
let controlFontSize = document.getElementById("font-size-control");

let textEl = document.getElementById("text");

controlFontSize.oninput = function () {
  textEl.style.fontSize = controlFontSize.value + "px";
};

console.log(textEl);
console.log(controlFontSize);

/* - Second variant - */
// const inputSizeControl = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');
// function changeFontSize(event) {
//     const textSize = event.target.value;
//     text.style.fontSize = `${textSize}%`;
// }
// inputSizeControl.addEventListener('input', changeFontSize);