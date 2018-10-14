"use strict";

let inputValue;
let inputBase;
let convertButton;
let resultContainer;

window.onload = init;

function init() {
	inputValue = document.getElementById("inputValue");
	inputBase = document.getElementById("inputBase");
	convertButton = document.getElementById("convertButton");
	resultContainer = document.getElementById("resultContainer");

	convertButton.addEventListener("click", convertValue);
}

function convertValue() {
	if (inputValue.value !== "" && inputBase.value !== "") {
		resultContainer.innerHTML = "";
		resultContainer.insertAdjacentText("beforeend", toDecimal(Number(inputValue.value), Number(inputBase.value)) );
	}
}

function toDecimal(value, base) {
	let decimal = 0;
	let tabValue = value.toString().split("").reverse();

	if(base > 9 || base <= 0 || base%1 !== 0) {
		alert("La base rentr\xE9e doit \xEAtre enti\xE8re et comprise entre 0 et 9 !");
		return NaN;
	}

	for(let i = 0; i < tabValue.length; i++) {
		if(tabValue[i] >= base) {
			alert("La valeur ne correspond pas \xE0 la base indiqu\xE9e !");
			return NaN;
		}
		decimal += tabValue[i]*base**i; // digit*base^i
	}
	return decimal;
}
