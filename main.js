var elForm = document.querySelector(".form");
var elInputName = document.querySelector(".name");
var elInputNumber = document.querySelector(".number");
var elInputData = document.querySelector(".data");
var elName = document.querySelector(".name__text");
var elNumber = document.querySelector(".number__text");
var elData = document.querySelector(".data__text");

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    elName.textContent = elInputName.value
    elNumber.textContent = elInputNumber.value.trim()
    elData.textContent = elInputData.value.trim()
})