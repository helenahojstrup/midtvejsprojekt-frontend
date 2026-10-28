fetch("http://localhost:3000/top3strongest")
.then(response => response.json())
.then(strongest => {
    const names = strongest.map(pokemon => pokemon.name);
    const totalStats = strongest.map(pokemon => pokemon.totalStat);

    const chartElement = document.querySelector("#strongPokemonChart");

    new Chart(chartElement, {
        type: "bar",
        data: {
            labels: names,
            datasets: [{
                label: "Total Stats",
                data: totalStats
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
})

fetch("http://localhost:3000/top3weakest")
    .then(response => response.json())
    .then(weakest => {
        const names2 = weakest.map(pokemon => pokemon.name);
        const totalStats2 = weakest.map(pokemon => pokemon.totalStat2);

        const chartElement = document.querySelector("#weakPokemonChart");

        new Chart(chartElement, {
            type: "bar",
            data: {
                labels: names2,
                datasets: [{
                    label: "Total Stats",
                    data: totalStats2
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
    })





































































fetch("http://localhost:3000/typeHighestAvgStat")
    .then(response => response.json())
    .then(data => {
        const types = data.map(item => item.type);
        const stats = data.map(item => Number(item.averageStat));

        new Chart(document.querySelector("#pokemonChart2"), {
            type: "bar",
            data: {
                labels: types,
                datasets: [{
                    label: "Højeste Gennemsnits-stat",
                    data: stats,
                    backgroundColor: '#9bd0ff'
                }]
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
            }
        });
    });




fetch("http://localhost:3000/pokemon/mostBalanced")
    .then(response => response.json())
    .then(data => {
        const listElement = document.querySelector("#pokemonList");
        listElement.innerHTML = "";

        data.forEach(pokemon => {
            const li = document.createElement("li");
            li.textContent = `${pokemon.name} - Span: ${pokemon.stat_range}`;
            listElement.appendChild(li);
        });
    });