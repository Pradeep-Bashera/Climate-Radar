// Init Weather
const weather = new Weather();

// Init Ui
const ui = new UI();

// Event Listeners
document.getElementById('location').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.querySelector('.getWeather').click();

    e.preventDefault();
  }
});

// Search Button
document.querySelector('.getWeather').addEventListener('click', () => {
  const city = document.getElementById('location').value;

  if (city.length === 0 || city.trim().length === 0) {
    document.getElementById('location').value = '';
    return;
  } else {
    weather.changeLocation(city);
  }

  PaintWeather();

  document.getElementById('location').value = '';

  document.querySelector('.errorContainer').style.display = 'none';

  document.getElementById('location').blur();

  document.querySelector('.eventLayer').classList.remove('eventLayerShown');
});

function PaintWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results, true, false);
    })
    .catch((err) => {
      console.log(err);
      ui.paint({}, false, true);
    });
}
