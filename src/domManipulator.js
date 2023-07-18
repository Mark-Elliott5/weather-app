const domManipulator = (() => {
  const startLoadingIcon = () => {
    const loading = document.getElementById('loading-image');
    loading.classList.remove('hidden');
  };

  const stopLoadingIcon = () => {
    const loading = document.getElementById('loading-image');
    loading.classList.add('hidden');
  };

  const convertTime = (input) => {
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
    };
    const [date, time] = [new Date(input), new Date(input)];
    const formattedDate = date.toLocaleString('en-US', dateOptions);
    const formattedTime = time.toLocaleString('en-US', timeOptions);
    return [formattedDate, formattedTime];
  };

  const updateForecastColumn = (data) => {
    const { forecast } = data;
    const todayMinTemp = forecast.forecastday[0].day.mintemp_f;
    const todayMaxTemp = forecast.forecastday[0].day.maxtemp_f;
    const tomorrowMinTemp = forecast.forecastday[1].day.mintemp_f;
    const tomorrowMaxTemp = forecast.forecastday[1].day.maxtemp_f;
    const thirdDayMinTemp = forecast.forecastday[2].day.mintemp_f;
    const thirdDayMaxTemp = forecast.forecastday[2].day.maxtemp_f;
    const dayAfterTomorrow = (() => {
      const date = new Date(forecast.forecastday[2].date);
      return date.toLocaleDateString('en-US', { weekday: 'long' });
    })();
    const todayTemps = document.getElementById('forecast-today-temps');
    const tomorrowTemps = document.getElementById('forecast-tomorrow-temps');
    const thirdDayTemps = document.getElementById('forecast-dat-temps');
    const dayAfterTomorrowElem = document.getElementById('day-after-tomorrow');
    todayTemps.textContent = `${todayMinTemp}°F/${todayMaxTemp}°F`;
    tomorrowTemps.textContent = `${tomorrowMinTemp}°F/${tomorrowMaxTemp}°F`;
    thirdDayTemps.textContent = `${thirdDayMinTemp}°F/${thirdDayMaxTemp}°F`;
    dayAfterTomorrowElem.textContent = `${dayAfterTomorrow}`;
  };

  const updateTodayColumn = (data) => {
    const { location } = data;
    const { name } = location;
    const [currentDate, currentTime] = convertTime(location.localtime);
    const locationElem = document.getElementById('location');
    locationElem.textContent = name;
    const dateElem = document.getElementById('date');
    dateElem.textContent = currentDate;
    const timeElem = document.getElementById('time');
    timeElem.textContent = currentTime;
    const todaysWeather = data.current;
    const currentTemp = todaysWeather.temp_f;
    const feelsLike = `Feels like ${todaysWeather.feelslike_f}`;
    const { humidity } = todaysWeather;
    const condition = todaysWeather.condition.text;
    const sunrisesunset = `${data.forecast.forecastday[0].astro.sunrise} Sunrise - ${data.forecast.forecastday[0].astro.sunset} Sunset`;
    const wind = `${todaysWeather.wind_mph}mph ${todaysWeather.wind_dir}`;
    const tempElem = document.getElementById('temperature');
    tempElem.textContent = `${currentTemp}°F`;
    const feelsLikeElem = document.getElementById('feels-like');
    feelsLikeElem.textContent = `${feelsLike}°F`;
    const humidityElem = document.getElementById('humidity');
    humidityElem.textContent = `${humidity}% Humidity`;
    const conditionElem = document.getElementById('cloud-conditions');
    conditionElem.textContent = condition;
    const sunElem = document.getElementById('sunrise-sunset');
    sunElem.textContent = sunrisesunset;
    const windElem = document.getElementById('wind-speed');
    windElem.textContent = wind;
  };

  const updateHourlyTempColumn = (data) => {
    const { hour } = data.forecast.forecastday[0];
    const intervals = Array.from(
      document.getElementsByClassName('interval-temp'),
    );
    const temps = Array.from(hour);
    for (let i = 0; i < 24; i += 1) {
      intervals[i].textContent = `${temps[i].temp_f}°F`;
    }
  };

  const updateBackground = (data) => {
    const background = document.getElementById('content');
    background.classList = '';
    const conditionCode = data.current.condition.code;
    if (conditionCode === 1000) {
      background.classList.add('sunny');
    } else if (conditionCode < 1100) {
      background.classList.add('cloudy');
    } else {
      background.classList.add('stormy');
    }
  };

  const removeLoadingEllipsis = () => {
    const elements = document.getElementsByClassName('loading');
    Array.from(elements).forEach((element) =>
      element.classList.remove('loading'),
    );
  };

  const updatePage = (data) => {
    updateForecastColumn(data);
    updateTodayColumn(data);
    updateHourlyTempColumn(data);
    updateBackground(data);
    stopLoadingIcon();
    removeLoadingEllipsis();
  };

  return {
    updatePage,
    startLoadingIcon,
    stopLoadingIcon,
  };
})();

export default domManipulator;
