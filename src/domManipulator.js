const domManipulator = (() => {
  let forecast;
  const getForecast = () => forecast;

  // const = pageLoad = async () => {

  // }

  const updatePage = () => {
    // try {
    //   const forecast = apiCaller.getForecast();

    //   if (!forecast) {
    //     throw new Error('Forecast data not available');
    //   }
    const data = getForecast();

    const todayMinTemp = data.forecast.forecastday[0].day.mintemp_f;
    const todayMaxTemp = data.forecast.forecastday[0].day.maxtemp_f;
    const tomorrowMinTemp = data.forecast.forecastday[1].day.mintemp_f;
    const tomorrowMaxTemp = data.forecast.forecastday[1].day.maxtemp_f;
    const thirdDayMinTemp = data.forecast.forecastday[2].day.mintemp_f;
    const thirdDayMaxTemp = data.forecast.forecastday[2].day.maxtemp_f;
    const todayTemps = document.getElementById('forecast-today-temps');
    const tomorrowTemps = document.getElementById('forecast-tomorrow-temps');
    const thirdDayTemps = document.getElementById('forecast-dat-temps');
    todayTemps.textContent = `${todayMinTemp} - ${todayMaxTemp}`;
    tomorrowTemps.textContent = `${tomorrowMinTemp} - ${tomorrowMaxTemp}`;
    thirdDayTemps.textContent = `${thirdDayMinTemp} - ${thirdDayMaxTemp}`;
    // } catch (error) {
    //   console.error('Error updating the page:', error);
    // }
  };

  const setForecast = (newForecast) => {
    forecast = newForecast;
    updatePage();
  };

  return { updatePage, setForecast, getForecast };
})();

export default domManipulator;
