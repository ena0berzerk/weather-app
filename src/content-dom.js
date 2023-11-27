export const contentDom = {
  parentDiv: document.querySelector('.main-weather'),
  city: document.querySelector('.city'),
  country: document.querySelector('.country'),
  img: document.querySelector('.img'),
  celsius: document.querySelector('.celsius'),
  fahrenheit: document.querySelector('.fahrenheit'),
  text: document.querySelector('.weather-text')
};

export default function renderWeatherInfo(DOM, data, isError) {
  contentDom.city.textContent = data.city;
  contentDom.country.textContent = data.country;
  contentDom.img.setAttribute('style', `display: block; background-image: url(${data.condition.icon});`);

  contentDom.celsius.textContent = `${data.celsius} °C`;
  contentDom.fahrenheit.textContent = `${data.fahrenheit} °F`;
  contentDom.text.textContent = `${data.condition.dayMessage}`;

  contentDom.celsius.addEventListener('click', (_) => {
    const celsiusDisplayNone = contentDom.celsius.setAttribute('style', 'display: none;');
    const fahrenheitDisplayNone = contentDom.fahrenheit.setAttribute('style', 'display: block;');
  });

  contentDom.fahrenheit.addEventListener('click', (_) => {
    const celsiusDisplayNone = contentDom.celsius.setAttribute('style', 'display: block;');
    const fahrenheitDisplayNone = contentDom.fahrenheit.setAttribute('style', 'display: none;');
  });

  DOM.input.value = '';
}
