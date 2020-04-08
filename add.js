const randNum1 = Math.floor(Math.random() * 20 + 1);
const randNum2 = Math.floor(Math.random() * 20 + 1);

const capchaLabel = document.querySelector("label[for=capcha]");
capchaLabel.textContent += ` ${randNum1} + ${randNum2}`;
const capchaInput = document.getElementById("capcha");
capchaInput.placeholder = ` ${randNum1} + ${randNum2} = `;

const notification = document.querySelector("div.notification");

document.forms.addbook.addEventListener("submit", (e) => {
	e.preventDefault();

	const name = e.target.elements.name.value;
	const author = e.target.elements.author.value;
	const capcha = Number(e.target.elements.capcha.value);

	const book = {
		name: name,
		author: author,
	};

	if(capcha === randNum1 + randNum2){
		fetch("https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books", 
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(book),
		})
			.then(() => {
				addNotification("green");
				notification.textContent = "Jūs padovanojote knygą!";
			})
			.catch((error) => {
				addNotification("red");
				notification.textContent = error.message;
			})

	} else {
		addNotification("red");
		notification.textContent = "Patikrinkite skaičiavimą ir bandykite dar kartą."
	}
});

const addNotification = (color) => {
	notification.classList.replace("nodisplay", "display");
	notification.classList.add(color);
	notification.addEventListener("click", () => {
		notification.classList.replace("display", "nodisplay");
	});
}





