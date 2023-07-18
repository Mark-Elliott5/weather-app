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
      domManipulator.setForecast(data);
    } catch (err) {
      alert(err);
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

// async function test() {
//     try {
//         throw new Error('oops');
//     } catch (error) {
//             console.log('error');
//             return Promise.reject(new Error(error));
//         }
//     }

// async function test2() {
//   try {
//       const test3 = await test();
//   } catch (error) {
//       console.log('error caught')
//   }
// }

// // Check if geolocation is supported by the browser
// if ("geolocation" in navigator) {
//   // Prompt user for permission to access their location
//   navigator.geolocation.getCurrentPosition(
//     // Success callback function
//     (position) => {
//       // Get the user's latitude and longitude coordinates
//       const lat = position.coords.latitude;
//       const lng = position.coords.longitude;

//       // Do something with the location data, e.g. display on a map
//       console.log(`Latitude: ${lat}, longitude: ${lng}`);
//     },
//     // Error callback function
//     (error) => {
//       // Handle errors, e.g. user denied location sharing permissions
//       console.error("Error getting user location:", error);
//     }
//   );
// } else {
//   // Geolocation is not supported by the browser
//   console.error("Geolocation is not supported by this browser.");
// }
// const initialQuery = async () => {
//   try {
//     const currentLocation = await getCurrentLocation();
//     const data = await searchQuery(currentLocation);
//     return data;
//   } catch (error) {
//     let message;
//     if (error === 1) {
//       message = 'User denied location services. ';
//     } else if (error === 2) {
//       message = 'Position unavailable. ';
//     } else {
//       message = 'Location services request timed out. ';
//     }
//     alert(`${message}Please search for a location instead.`);
//     return null;
//   }
// };
// const getCurrentLocation = async () => {
//   const coordinates = navigator.geolocation.getCurrentPosition((position) => {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     const location = `${latitude},${longitude}`;
//     return location;
//   });
//   return coordinates;
// };
