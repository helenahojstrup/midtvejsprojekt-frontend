
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
