//list of trainers

fetch('http://localhost:3000/all/trainers')
    .then(response => response.json())
    .then(trainers => {
        const trainerListe = document.querySelector("#listOfTrainers")

        for (let i = 0; i < trainers.length; i++) {
            const trainerObjects = document.createElement("li");
            trainerObjects.innerText = trainers[i].trainer_name;

            const trainerStatsList = document.createElement('ul')
            const trainerStats = {
                hometown:"Hometown",
                age:"Age"
            }
            const trainerStatsName = Object.keys(trainerStats)
            for (let k = 0; k < trainerStatsName.length; k++) {
                 const trainerStatsObject = document.createElement('li')
            const trainerStatKey = trainerStatsName[k]
            trainerStatsObject.innerText = trainerStats[trainerStatKey] + ": " + trainers[i][trainerStatKey]
            trainerStatsList.appendChild(trainerStatsObject)
        }
        trainerObjects.appendChild(trainerStatsList)
        trainerListe.appendChild(trainerObjects)
    }
});
//trainer/new/
document.querySelector("#opretBtn").addEventListener("click", function () {

    fetch("http://localhost:3000/trainer/new/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.querySelector("#name").value,
            hometown: document.querySelector("#hometown").value,
            age: document.querySelector("#age").value
        })
    })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#besked").textContent = data;
        });
});


//all/trainers/withPokemon
fetch('http://localhost:3000/all/trainers/withPokemon')
    .then(response => response.json())
    .then(trainerData =>{
        const listWithTrainers = document.querySelector('#trainer-list')
        trainerData.forEach((trainer) => {
            const p = document.createElement('p')
            p.textContent = trainer.trainer_name + " - " + trainer.name
            listWithTrainers.append(p)
        })
    });
































//trainer/catch


























