import './css/style.scss';
import isDevWebpackMode from './is-dev';
import fetchAPI, { getDatas } from './fetch-weather-api';
import renderWeatherInfo, { contentDom } from './content-dom';

export const formDom = {
  form: document.querySelector('form'),
  input: document.querySelector('#location'),
  btn: document.querySelector('#submitBtn'),

  submitForm() {
    formDom.form.addEventListener('submit', (_) => {
      _.preventDefault();

      if (formDom.input.value === undefined || formDom.input.value === null || formDom.input.value === '') {
        fetchAPI(formDom.input.dataset.default);
      } else {
        (async function extractPromise() {
          const dataLocation = await fetchAPI(formDom.input.value);
          // if ()
          renderWeatherInfo(formDom, dataLocation);
        })();
      }
    });
  }
};
formDom.submitForm();
