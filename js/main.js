async function getJSON() {
    position = document.getElementById('position')[0];
    console.log(position)
    await fetch(`https://ergast.com/api/f1/2019/${position}/driverStandings.json`)
        .then(data => data.json())
        .then(rawData => {

            for (let i = 0; i < 3; i++) {
                let position_number = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position
                display_position = document.createElement('h3')
                display_position.innerHTML = position_number
                document.body.th.td.append(display_position)
            }
        })
}

