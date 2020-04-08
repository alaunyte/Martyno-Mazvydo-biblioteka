const bookId = document.location.search.slice(1);

fetch(
	`https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books/${bookId}`
	)
	.then((response) => response.json())
	.then((data) => {
		document.getElementById("title").textContent = data.name;
		document.getElementById("author").textContent = data.author;
	})