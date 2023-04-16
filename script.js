






fetch ("https://api.openweathermap.org/geo/1.0/direct?q=Dallas&limit=5"){
    .then(response => response.json())
    .then(citiesFound => {
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
    
        return fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=')
    })

})

.then(response => response.json())
.then(data => {

    console.log(data);
})