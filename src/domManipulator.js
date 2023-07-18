const domManipulator = (() => {
  const startLoadingIcon = () => {
    const loading = document.getElementById('loading');
    loading.classList.remove('hidden');
  };

  const stopLoadingIcon = () => {
    const loading = document.getElementById('loading');
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

  const updatePage = (data) => {
    const { forecast } = data;
    const todayMinTemp = forecast.forecastday[0].day.mintemp_f;
    const todayMaxTemp = forecast.forecastday[0].day.maxtemp_f;
    const tomorrowMinTemp = forecast.forecastday[1].day.mintemp_f;
    const tomorrowMaxTemp = forecast.forecastday[1].day.maxtemp_f;
    const thirdDayMinTemp = forecast.forecastday[2].day.mintemp_f;
    const thirdDayMaxTemp = forecast.forecastday[2].day.maxtemp_f;
    const todayTemps = document.getElementById('forecast-today-temps');
    const tomorrowTemps = document.getElementById('forecast-tomorrow-temps');
    const thirdDayTemps = document.getElementById('forecast-dat-temps');
    todayTemps.textContent = `${todayMinTemp} - ${todayMaxTemp}`;
    tomorrowTemps.textContent = `${tomorrowMinTemp} - ${tomorrowMaxTemp}`;
    thirdDayTemps.textContent = `${thirdDayMinTemp} - ${thirdDayMaxTemp}`;

    const { location } = data;
    const { name } = location;
    const [currentDate, currentTime] = convertTime(location.localtime);
    const locationElem = document.getElementById('location');
    locationElem.textContent = name;
    const dateElem = document.getElementById('date');
    dateElem.textContent = currentDate;
    const timeElem = document.getElementById('time');
    timeElem.textContent = currentTime;

    // const todaysWeather = data.current;
    // const currentTemp = todaysWeather.temp_f;
    // const feelsLike = todaysWeather.feelslike_f;
    // const { humidity } = todaysWeather;
    // const condition = todaysWeather.condition.text;
    // const sunrisesunset = `${forecast.forecastday[0].astro.sunrise} - ${forecast.forecastday[0].astro.sunset}`;
    // const wind = `${todaysWeather.wind_mph} ${wind_dir}`;
    // const currentTemp = ;
    stopLoadingIcon();
  };

  return {
    updatePage,
    startLoadingIcon,
    stopLoadingIcon,
  };
})();

export default domManipulator;
