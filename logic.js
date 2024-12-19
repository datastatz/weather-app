// Select the forecast container







// Select the form and input field
const form = document.querySelector('form');
const inputField = document.getElementById('location');

// Function to handle form submission
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the value from the input field
    const InputLocation = inputField.value.trim();

    // Construct the dynamic URL
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${InputLocation}/today?key=CJWK9MNLPA27ZDX4GFPTPWDWQ`;

    try {
        // Fetch data from the API
        const response = await fetch(url);
        const data = await response.json();
        
        
        // Log the data to the console
        console.log(data);
        updateForecast(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});

const forecastContainer = document.getElementById('forecast');

// Function to update the forecast dynamically
function updateForecast(data) {
    const { address, currentConditions } = data;
    const { temp, feelslike, conditions, humidity, windspeed } = currentConditions;

    // Dynamically generate the weather content
    forecastContainer.innerHTML = `
        <h3>Weather in ${address}</h3>
        <p>Temperature: ${temp}°C</p>
        <p>Feels Like: ${feelslike}°C</p>
        <p>Condition: ${conditions}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windspeed} km/h</p>
    `;
}

