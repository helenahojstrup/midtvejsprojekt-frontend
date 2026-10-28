fetch("http://localhost:3000/top3strongest")
.then(response => response.json())
.then(strongest => {
    const names = strongest.map(pokemon => pokemon.name);
    const totalStats = strongest.map(pokemon => pokemon.totalStat);

    const chartElement = document.querySelector("#pokemonChart");

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