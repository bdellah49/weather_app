async function getWeather(city) {
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
}
getWeather("setif");
