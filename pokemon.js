
fetch("http://localhost:3000/all/pokemon")
    .then(response => response.json())
    .then(pokemon => {
        const pokemonListe = document.querySelector("#pokemonListe");


        const uniquePokemon = {}
        for (let f = 0; f < pokemon.length; f++) {
            const p = pokemon[f];
            if (!uniquePokemon[p.pokedex_number]){
                uniquePokemon[p.pokedex_number] = {
                    name: p.name,
                    hp: p.hp,
                    attack: p.attack,
                    defence: p.defence,
                    speed: p.speed,
                    special_defence: p.special_defence,
                    special_attack: p.special_attack,
                    moves: new Set()

                };
                if (p.move_name) uniquePokemon[p.pokedex_number].moves.add(p.move_name)
            }}
            


            for (let i = 0; i < pokemon.length; i++) {
            const pokeObjects = document.createElement("li");
            pokeObjects.innerText = pokemon[i].name;
            pokeObjects.style.cursor = "pointer";

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

            let isExpanded = false;
            let detailsBoxes = null;

            pokeObjects.addEventListener("click", (e) => {
                e.stopPropagation();

                if (isExpanded) {
                    detailsBoxes.remove();
                    isExpanded = false;
                } else {
                    detailsBoxes = document.createElement("div");
                    detailsBoxes.className = "pokemon-details";
                

                const detailsList = document.createElement("ul")
                const details = {
                    move_name: "Move name",
                    move_power: "Move power",
                    move_accuracy: "Move accuracy",
                    move_type: "Move type",
                    move_category: "Move category",
                    season_number: "Season number",
                    episode_number: "Episode number"
                };
                const detailKeys = Object.keys(details);

                for (let m = 0; m < detailKeys.length; m++) {
                    const detailObject = document.createElement("li");
                    const detailKey = detailKeys[m];

                    detailObject.innerText = details[detailKey] + ": " + (pokemon[i][detailKey]);
                    detailsList.appendChild(detailObject)

                }
                detailsBoxes.appendChild(detailsList);
                pokeObjects.appendChild(detailsBoxes);
                isExpanded = true;
            }})


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


fetch("http://localhost:3000/trainer/catch", {
    method: "POST"
})
    .then(response => response.text())
    .then(data => {
        console.log(data);
    });


























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