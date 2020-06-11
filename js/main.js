async function getJSON() {
    lap = document.getElementsByName('lap')[0].value
    year = document.getElementById('year').value
    await fetch(`https://ergast.com/api/f1/${year}/${lap}/driverStandings.json`)
        .then(data => data.json())
        .then(rawData => {
            for (let i = 0; i < 7; i++) {
                let position_number = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position
                document.getElementById(`position${i.toString()}`).innerHTML = position_number
            }
            for (let i = 0; i < 7; i++) {
                let last_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
                document.getElementsByClassName(`last_name${i.toString()}`).innerHTML = last_name
                let first_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
                document.getElementById(`first_name${i.toString()}`).innerHTML = first_name + ' ' + last_name
            }
            for (let i = 0; i < 7; i++) {
                let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
                document.getElementById(`nationality${i.toString()}`).innerHTML = nationality
            }
            for (let i = 0; i < 7; i++) {
                let sponsor = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
                document.getElementById(`sponsor${i.toString()}`).innerHTML = sponsor
        
            }
            for (let i = 0; i < 7; i++) {
                let points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
                document.getElementById(`points${i.toString()}`).innerHTML = points
            }
        })
            
}



