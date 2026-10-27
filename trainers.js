fetch("http://localhost:3000/trainer/new")
    .then(response => response.text())
    .then(data => {
        console.log(data);
    });