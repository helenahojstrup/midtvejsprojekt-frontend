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





































































fetch("http://localhost:3000/typeHighestAvgStat")
    .then(response => response.text())
    .then(text => {
        const type = text.split("AVG stat = ")[0].replace("body type:", "").trim();
        const stat = parseFloat(text.split("AVG stat = ")[1]);

        new Chart(document.querySelector("#pokemonChart2"), {
            type: "bar",
            data: {
                labels: [type],
                datasets: [{
                    label: "The body type with the highest average stat",
                    data: [stat]
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
        });
    });