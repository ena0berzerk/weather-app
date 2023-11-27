export function getDatas(response) {
  const requireDatas = {
    country: response.location.country,
    city: response.location.name,
    celsius: response.current.temp_c,
    fahrenheit: response.current.temp_f,
    condition: {
      code: response.current.condition.code,
      icon: response.current.condition.icon,
      dayMessage: response.current.condition.text
    }
  };
  console.log(requireDatas);
  return requireDatas;
}

export default async function fetchAPI(location) {
  try {
    const API_KEY = 'e30f31669c774a29bd871601232411';
    const getPromise = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`, {
      mode: 'cors'
    });
    const response = await getPromise.json();

    console.log(response);
    return getDatas(response);
  } catch (error) {
    throw new Error(error.message);
  }
}
