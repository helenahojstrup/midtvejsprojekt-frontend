// All pokemon
fetch("http://localhost:3000/all/pokemon")
    .then(response => response.json())
    .then(pokemon => {
        const pokemonListe = document.querySelector("#pokemonListe");

        for (let i = 0; i < pokemon.length; i++) {
            const pokeObjects = document.createElement("li");
            pokeObjects.innerText = pokemon[i].name;

            const statsListe = document.createElement("ul");

            const stats = {
                hp: "HP",
                attack: "Attack",
                defence: "Defence",
                speed: "Speed",
                special_defence: "Special defence",
                special_attack: "Special attack"
            };

            const statsNames = Object.keys(stats);

            for (let j = 0; j < statsNames.length; j++) {
                const statObject = document.createElement("li");

                const statKey = statsNames[j]

                statObject.innerText = stats[statKey] + ": " + pokemon[i][statKey];

                statsListe.appendChild(statObject);
            }

            pokeObjects.appendChild(statsListe);
            pokemonListe.appendChild(pokeObjects);
        }
    });

//pokemon filtre
const selectedPokemon = document.querySelector("#pokemon-type")
selectedPokemon.addEventListener("change", () => {
    fetch('http://localhost:3000/pokemon/filters?primary_type=' + selectedPokemon.value)
        .then(response => response.json())
        .then(filter => {
            console.log(filter)
        })
    })




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

