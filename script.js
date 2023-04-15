






fetch ("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid="){
    .then(Response => response.json())
    .then(citiesFound => {
        let firstCity = citiesFound[0]
        console.log(firstCity.lat);
        console.log(firstCity.lon);
    
        return fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=')
    })

})

.then(response => response.json())
.then(data => {

    console.log(data);
})