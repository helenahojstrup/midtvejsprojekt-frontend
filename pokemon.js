
fetch("http://localhost:3000/all/pokemon")
    .then(response => response.json())
    .then(pokemon => {
        const pokemonListe = document.querySelector("#pokemonListe");

        for (let i = 0; i < pokemon.length; i++) {
            const pokeObjects = document.createElement("li");
            pokeObjects.innerText = pokemon[i].name;

            const statsListe = document.createElement("ul");

            const stats = {
                primary_type: "Primary type",
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
const selectedPrimaryType = document.querySelector("#pokemon-type")
const minAttack = document.querySelector("#minAttack")
const pokemonName = document.querySelector("#pokemonName")
const hp = document.querySelector("#minHp")
const sorterAttack = document.querySelector("#sortAttack")
const filterPokemon = () => {
        fetch('http://localhost:3000/pokemon/filters?primary_type=' + selectedPrimaryType.value + '&minAttack=' + minAttack.value + '&name=' + pokemonName.value + '&hp=' + hp.value + '&sorter_attack=' + sorterAttack.value)
            .then(response => response.json())
            .then(filter => {
                const getTypes = document.querySelector("#pokemonListe")
                getTypes.innerHTML = ''
                filter.forEach((item) => {
                    const li = document.createElement("li");
                    li.innerText = item.name;

                    const statsListe = document.createElement("ul");

                    const stats = {
                        primary_type: "Primary type",
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
                        const statKey = statsNames[j];

                        statObject.innerText = stats[statKey] + ": " + item[statKey];

                        statsListe.appendChild(statObject);
                    }
                    li.appendChild(statsListe);
                    getTypes.appendChild(li);
                });
            })
}
selectedPrimaryType.addEventListener("change", filterPokemon)
minAttack.addEventListener("change", filterPokemon)
pokemonName.addEventListener("change", filterPokemon)
hp.addEventListener("change", filterPokemon)
sorterAttack.addEventListener("change", filterPokemon)


























//bodytypes
fetch('http://localhost:3000/bodytypes')
    .then(response => response.json())
    .then(pokemonBodyType =>{
        const listWithBodyTypes = document.querySelector('#bodyTypesList')
        pokemonBodyType.forEach((bodyType) => {
            const p = document.createElement('p')
            p.textContent = bodyType.type + " - " + bodyType.name
            listWithBodyTypes.append(p)
        })
    });