const button7 = document.getElementById("7");
const resultElement = document.getElementById("result");

console.log(button7.textContent);

const button8 = document.getElementById("8");

console.log(button8.textContent);

const button9 = document.getElementById("9");

console.log(button9.textContent);

button7.addEventListener("click", () => {
	resultElement.textContent = "coucou";
});
