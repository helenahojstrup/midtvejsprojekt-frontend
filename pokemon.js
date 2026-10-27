fetch("http://localhost:3000/trainer/catch", {
    method: "POST"
})
    .then(response => response.text())
    .then(data => {
        console.log(data);
    });