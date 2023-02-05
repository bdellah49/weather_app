const btn = document.getElementById("getWeather");
const date = new Date();
const container = document.querySelector(".container");
async function getWeather(city) {
  try {
    let cord = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=4df59bd0d657738f4857f51ed4b10d9c`,
      {
        mode: "cors",
      }
    );
    let response = await cord.json();
    let latitude = response[0].lat;
    let longitude = response[0].lon;
    let Weather = await weather(latitude, longitude);
    function weather(longitude, latitude) {
      return fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,sunrise,sunset&timezone=auto`,
        { mode: "cors" }
      );
    }
    let result = await Weather.json();
    console.log(result);
  } catch {
    console.log("error has accured");
  }
}
if (date.getHours() < 7) {
}
btn.addEventListener("click", () => {
  const location = document.getElementById("location");
  getWeather(location.value);
});
