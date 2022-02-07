// Selecting Html Tags
const inp = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector(".output");
const body = document.querySelector("body");
// selecting tags
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const p6 = document.querySelector(".p6");


// backgroung imgae changes using function call

function myfun(res, temp) {
    if (temp <= 0) {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1595231951275-23967b222566?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'overcast clouds' || res == 'scattered clouds' || res == 'broken clouds') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1593238665385-3058d20e6c2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'clear sky') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1563974318767-a4de855d7b43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'light rain' || res == 'moderate rain' || res == 'heavy rain' || res == 'rain') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1514632595-4944383f2737?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhaW5uZyUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'haze') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1458022479614-14737487b68c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1558342875-3e79669051d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYW50aWMlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
    }


}


// Start Processing
btn.addEventListener("click", (e) => {
    let cityName = inp.value;

    if (cityName != "") {
        output.style.display = "block";
        // Declaration of Some value
        let description;
        let temp;
        let tempMin, tempMax, tempAll;
        let humidity;
        let time = new Date().toDateString();
        // fetching data from Api

        let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=57d089aa08a6b287669bca5a71b82149`
        fetch(api)
            .then((result) => {
                return result.json();
            })
            .then((data) => {

                // Getting Data Values

                description = data.weather[0].description;
                temp = data.main.temp;
                tempMin = data.main.temp_min;
                tempMax = data.main.temp_max;
                humidity = data.main.humidity;



                // Some Modification
                temp = temp - 273.15;
                temp = Math.round(temp);

                // function call

                myfun(description, temp);

                temp = temp + "°C";


                tempMin = tempMin - 273.15;
                tempMin = Math.round(tempMin);
                tempMin = tempMin + "°C";

                tempMax = tempMax - 273.15;
                tempMax = Math.round(tempMax);
                tempMax = tempMax + "°C";


                tempAll = tempMin + " (min) /" + tempMax + " (max)";

                humidity = "Humidity: " + humidity + "%";


                // Appending Data
                p1.innerText = cityName;
                p2.innerText = time;
                p3.innerText = temp;
                p4.innerText = tempAll;
                p5.innerText = humidity;
                p6.innerText = description;


            })
            .catch((err) => {
                alert(err);
            });



        // Setting attribute For designing Purpose
        p1.setAttribute("class", "p1");
        p2.setAttribute("class", "p1");
        p3.setAttribute("class", "p1");
        p6.setAttribute("class", "p1");
        p3.setAttribute("id", "newOne");



        // clearing input

        inp.value = "";

    }


});