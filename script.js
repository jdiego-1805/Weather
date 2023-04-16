






fetch ("https://api.openweathermap.org/geo/1.0/direct?q=${Dallas}&limit=55d7e85acfb64463dbf6905d193511b21"){
    .then(response => response.json())
    .then(citiesFound => {
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
    
        return fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=5d7e85acfb64463dbf6905d193511b21')
    })

})

.then(response => response.json())
.then(data => {

    console.log(data);
})