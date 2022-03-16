const cityInput = document.querySelector('form')
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = (data) => {
   
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;

  // destructure properties
  const { cityDetails, weather } = data;
  
  // update details properties
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
  `

  // update day and night image
  const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);

  // update weather icon 
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
   
  // remove the d-none class
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none')
  }  
}

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {cityDetails, weather};
}

cityInput.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault()

  // get city value
  const city = cityInput.city.value.trim();
  cityInput.reset();
 
  // update the ui with new city
  updateCity(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err));
})