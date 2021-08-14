const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
console.log(inputEl);

// const inputValidation = document.querySelector("#validation-input");
// const dataLength = Number(inputValidation.dataset.length);
// function checkDataLength(event) {
//     if (event.currentTarget.value.length === dataLength) {
//         event.currentTarget.classList.add("valid");
//     } else {
//          event.currentTarget.classList.add("invalid");
//     }
// }
// inputValidation.addEventListener('blur', checkDataLength);