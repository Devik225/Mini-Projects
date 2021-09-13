const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})


app.post('/', (req, res)=>{
    console.log("got the details");

    var city = req.body.cityName;

    console.log(city);    

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a75fd0ffb10a00e19a40a008a31f4398&units=metric";


    https.get(url, (response)=>{
        console.log(response);

        response.on("data", (data)=>{
            var weather = JSON.parse(data)
            var temp = weather.main.temp;
            var stat = weather.weather[0].main;
            const img_url =  "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"

            console.log(img_url);

            res.write("<h1>Temperature in " + city + " is " + temp + " degree celsius</h1>");
            res.write("<p> Sky is covered with " + stat + "</p>")
            res.write("<img src = " + img_url +">");
            res.send();
        })

    })

})

app.listen(3000, ()=>{
    console.log("started");
})