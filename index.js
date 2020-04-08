const table = document.querySelector("tbody");

fetch("https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books")
.then(response => response.json())
.then(data => {
  data.forEach(value => {
    const tr = table.insertRow();

    const td1 = tr.insertCell();
    td1.textContent = value.name;

    const td2 = tr.insertCell();
    td2.textContent = value.author;

    const td3 = tr.insertCell();
    const button = document.createElement("button");
    button.textContent = "View";
    
    button.addEventListener("click", () => {
    	location.href = `book.html?${value.id}`;
    })
    td3.append(button);
  });
});