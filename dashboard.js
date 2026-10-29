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
                label: "Total stats",
                data: totalStats,
                backgroundColor: "#3b4cca",
                borderColor: "#263a9b",
                borderWidth: 1,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#cc0000"
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#cc0000"
                    },
                    title: {
                        display: true,
                        text: "Pokémon",
                        color: "#cc0000"
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#cc0000"
                    },
                    title: {
                        display: true,
                        text: "Average Stat",
                        color: "#cc0000"
                    }
                }
            }
        }
    });
});

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
                    label: "Total stats",
                    data: totalStats2,
                    backgroundColor: "#3b4cca",
                    borderColor: "#263a9b",
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: "#cc0000"
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: "#cc0000"
                        },
                        title: {
                            display: true,
                            text: "Pokémon",
                            color: "#cc0000"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#cc0000"
                        },
                        title: {
                            display: true,
                            text: "Average Stat",
                            color: "#cc0000"
                        }
                    }
                }
            }
        });
    });





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
                    label: "Body type with the highest average stat",
                    data: stats,
                    backgroundColor: "#3b4cca",
                    borderColor: "#263a9b",
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: "#cc0000"
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: "#cc0000"
                        },
                        title: {
                            display: true,
                            text: "Pokémon Type",
                            color: "#cc0000"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#cc0000"
                        },
                        title: {
                            display: true,
                            text: "Average Stat",
                            color: "#cc0000"
                        }
                    }
                }
            }
        });
    });







fetch("http://localhost:3000/pokemon/mostBalanced")
    .then(response => response.json())
    .then(data => {
        const listElement = document.querySelector("#pokemonList");

        data.forEach(pokemon => {
            const li = document.createElement("li");

            const pokeImg = document.createElement("img");
            pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokedex_number}.png`;
            pokeImg.alt = pokemon.name;

            const text = document.createElement("p");
            text.textContent = `${pokemon.name} - Span: ${pokemon.stat_range}`;

            li.appendChild(pokeImg);
            li.appendChild(text);

            listElement.appendChild(li);
        });
    });


