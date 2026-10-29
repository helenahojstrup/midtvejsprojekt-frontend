
fetch("http://localhost:3000/all/pokemon")
    .then(response => response.json())
    .then(pokemon => {
        const pokemonListe = document.querySelector("#pokemonListe");

            for (let i = 0; i < pokemon.length; i++) {
            const pokeObjects = document.createElement("li");
            pokeObjects.innerText = pokemon[i].name;
            const img = document.createElement("img");
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon[i].pokedex_number}.png`;
            pokeObjects.appendChild(img);
            pokeObjects.style.cursor = "pointer";

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
                    const img = document.createElement("img");
                    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.pokedex_number}.png`;
                    li.appendChild(img);
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
pokemonName.addEventListener("input", filterPokemon)
hp.addEventListener("change", filterPokemon)
sorterAttack.addEventListener("change", filterPokemon)


//Filter button
const filterBtn = document.querySelector("#filterBtn")
const filterArrow = document.querySelector("#filter-arrow")
console.log(filterArrow)
const pokemonFilters = document.querySelector("#pokemon-filters")
filterBtn.addEventListener("click", () => {
    if (pokemonFilters.style.display === "flex") {
        pokemonFilters.style.display = "none"
        filterArrow.style.transform = "rotate(0deg)"
    }
    else {
        pokemonFilters.style.display = "flex"
        filterArrow.style.transform = "rotate(180deg)"
    }
})


























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