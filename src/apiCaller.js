import domManipulator from './domManipulator';

const apiCaller = (() => {
  const searchQuery = async (position) => {
    try {
      domManipulator.startLoadingIcon();
      const call = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=6d0455883e7c4645aa8174008231507&q=${position}&days=3`,
        { mode: 'cors' },
      );
      const data = await call.json();
      console.log(data);
      domManipulator.updatePage(data);
    } catch (error) {
      console.warn(error);
      domManipulator.stopLoadingIcon();
    }
  };

  const searchCurrentPosition = (position) => {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const location = `${latitude},${longitude}`;
    console.log(location);
    searchQuery(location);
  };

  const geolocationError = (error) => {
    let message;
    if (error.code === 1) {
      message = 'User denied location services. ';
    } else if (error.code === 2) {
      message = 'Position unavailable. ';
    } else {
      message = 'Location services request timed out. ';
    }
    console.warn(`${message}Please search for a location instead.`);
    domManipulator.stopLoadingIcon();
  };

  const initialQuery = () => {
    domManipulator.startLoadingIcon();
    navigator.geolocation.getCurrentPosition(
      searchCurrentPosition,
      geolocationError,
    );
  };

  return { initialQuery, searchQuery };
})();

export default apiCaller;
