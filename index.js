// const getFriends = document.getElementById("getFriends");

// getFriends.addEventListener("click", function(){
//     axios
//         .get("http://localhost:4000/api/users")
//         .then(res => {
//             console.log(res.data);
//         })
// })
document.getElementById("button").onclick = function () {
    axios
      .get("http://localhost:4000/api/users") //goes to /api/users in server.js
      .then(function (response) {
        console.log(response);
        const data = response.data; //response.data is equal to whatever was in the .send() in the server.js file. we are setting response.data to a variable named data.
        document.getElementById("people").innerHTML = data //setting the value of "data" inside the html element that has the id "people"
          .map(function (person) { //formatting stuff
            return '<li class="row">' + person;
          })
          .join("");
      })
      .catch(function (err) {
        document.getElementById("people").innerHTML =
          '<li class="text-danger">' + err.message + "</li>";
      });
      document.getElementById("title").innerHTML = "Friends";
  };

  document.getElementById("weather").onclick = function () {
    axios
      .get("http://localhost:4000/weather/" + document.getElementById("temp").value) //.value returns the content of an html element
      .then(function (response) {
        const data = response.data;
        document.getElementById("people").innerHTML = data;
      })
      .catch(function (err) {
        document.getElementById("people").innerHTML =
          '<li class="text-danger">' + err.message + "</li>";
      });
      document.getElementById("title").innerHTML = "Weather";
  };


  document.getElementById("cityweather").onclick = function () {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("city").value}&appid=7143b2e18f9b5cf9947a8634d92f79dc`)
      .then(function (response) {
        const data = response.data;
        console.log(data);
        document.getElementById("people").innerHTML = (((data.main.temp)-273.15) * (9/5) + 32).toFixed(2) + " F in " + data.name + ", " + data.sys.country; //math is conversion from kelvin to Farenheit
      })
      .catch(function (err) {
        document.getElementById("people").innerHTML =
          '<li class="text-danger">' + err.message + "</li>";
      });
      document.getElementById("title").innerHTML = "Weather";
  };
