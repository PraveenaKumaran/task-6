async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "9d639cf4041f30e0697af96330793fc1"; // 🔁 Replace with your actual free API key

  if (!city) {
    document.getElementById("weatherResult").innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const output = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>☁️ Condition: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = output;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>❌ City not found. Try again!</p>`;
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("weatherResult").innerHTML = "<p>⚠️ Something went wrong. Please try again.</p>";
  }
}
