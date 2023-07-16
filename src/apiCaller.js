const apiCaller = (() => {
  const getCurrentLocation = async () => {
    try {
      const coordinates = navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude } = position.coords;
          const { longitude } = position.coords;
          const location = `${latitude},${longitude}`;
          return location;
        },
      );
      return coordinates;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  };

  const searchQuery = async (stringy) => {
    try {
      const call = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=6d0455883e7c4645aa8174008231507&q=${stringy}`,
        { mode: 'cors' },
      );
      const data = await call.json();
      return data;
    } catch (err) {
      alert(err);
      return null;
    }
  };

  const initialQuery = async () => {
    try {
      const currentLocation = await getCurrentLocation();
      const data = await searchQuery(currentLocation);
      return data;
    } catch (error) {
      let message;
      if (error === 1) {
        message = 'User denied location services. ';
      } else if (error === 2) {
        message = 'Position unavailable. ';
      } else {
        message = 'Location services request timed out. ';
      }
      alert(`${message}Please search for a location instead.`);
      return null;
    }
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
