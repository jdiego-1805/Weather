var APIkey = "5d7e85acfb64463dbf6905d193511b21"
var searchBtn = document.getElementById("btn");
var cityInput = document.getElementById("city-input");


function searchCurrentWeather() {
    var city = cityInput.value
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIkey+"&units=imperial")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        var icon = "https://openweathermap.org/img/wn/"+data.weather.icon+"@2x.png"
    })
}




// second API call https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=5d7e85acfb64463dbf6905d193511b21

searchBtn.addEventListener ("click", searchCurrentWeather)






// fetch("https://api.openweathermap.org/geo/1.0/direct?q=${Dallas}&limit=55d7e85acfb64463dbf6905d193511b21"){
//     .then(response => response.json())
//         .then(citiesFound => {
//             let firstCity = citiesFound[0];
//             console.log(firstCity.lat);
//             console.log(firstCity.lon);

//             return fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=5d7e85acfb64463dbf6905d193511b21')
//         })

// }

// .then(response => response.json())
//     .then(data => {

//         console.log(data);
//     })

