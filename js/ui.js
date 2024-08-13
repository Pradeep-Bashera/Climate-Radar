class UI {
  constructor() {
    this.weather = document.querySelector('.weather');
    this.weatherIcon = document.querySelector('.weatherIcon');
    this.temp = document.querySelector('.temp');
    this.feels = document.querySelector('.feels');
    this.pressure = document.querySelector('.pressure');
    this.humidity = document.querySelector('.humidity');
    this.AQI = document.querySelector('.AQI');
    this.country = document.querySelector('.country');
    this.cityName = document.querySelector('.city');
    this.location = document.querySelector('.location');
    this.sunrise = document.querySelector('.sunrise');
    this.sunset = document.querySelector('.sunset');

    // forecast day

    this.today_DayForecastIcon = document.querySelector(
      '.today_DayForecastIcon'
    );

    this.today_DayForecastCondition = document.querySelector(
      '.today_DayForecastCondition'
    );
    this.today_DayForecastTemperature_min = document.querySelector(
      '.today_DayForecastTemperature_min'
    );
    this.today_DayForecastTemperature_max = document.querySelector(
      '.today_DayForecastTemperature_max'
    );
    this.today_DayForecastTemperature_avg = document.querySelector(
      '.today_DayForecastTemperature_avg'
    );

    this.today_DayForecastHumidity = document.querySelector(
      '.today_DayForecastHumidity'
    );

    this.today_DayForecastVisibility = document.querySelector(
      '.today_DayForecastVisibility'
    );
    this.today_DayForecastWind = document.querySelector(
      '.today_DayForecastWind'
    );

    // hourly forecast nodes
    this.hourlyForecastNodes = document.querySelectorAll('.hourlyForecast');

    // hourly today forecast
    this.todayHourlyForecast = this.hourlyForecastNodes[0];

    // icons
    this.todayIconNodes = [];

    Array.from(this.todayHourlyForecast.children[1].children).forEach((node) =>
      this.todayIconNodes.push(node.children[0].children[0])
    );

    // condition
    this.todayConditionNodes = [];

    Array.from(this.todayHourlyForecast.children[1].children).forEach((node) =>
      this.todayConditionNodes.push(node.children[0].children[1])
    );

    // temperature
    this.todayTempNodes = [];

    Array.from(this.todayHourlyForecast.children[1].children).forEach((node) =>
      this.todayTempNodes.push(node.children[2])
    );

    // forecast day

    this.tomorrow_DayForecastIcon = document.querySelector(
      '.tomorrow_DayForecastIcon'
    );

    this.tomorrow_DayForecastCondition = document.querySelector(
      '.tomorrow_DayForecastCondition'
    );
    this.tomorrow_DayForecastTemperature_min = document.querySelector(
      '.tomorrow_DayForecastTemperature_min'
    );
    this.tomorrow_DayForecastTemperature_max = document.querySelector(
      '.tomorrow_DayForecastTemperature_max'
    );
    this.tomorrow_DayForecastTemperature_avg = document.querySelector(
      '.tomorrow_DayForecastTemperature_avg'
    );

    this.tomorrow_DayForecastHumidity = document.querySelector(
      '.tomorrow_DayForecastHumidity'
    );

    this.tomorrow_DayForecastVisibility = document.querySelector(
      '.tomorrow_DayForecastVisibility'
    );
    this.tomorrow_DayForecastWind = document.querySelector(
      '.tomorrow_DayForecastWind'
    );

    this.tomorrow_DayForecastSunrise = document.querySelector(
      '.tomorrow_DayForecastSunrise'
    );
    this.tomorrow_DayForecastSunset = document.querySelector(
      '.tomorrow_DayForecastSunset'
    );

    // hourly tomorrow forecast
    this.tomorrowHourlyForecast = this.hourlyForecastNodes[1];

    // icons
    this.tomorrowIconNodes = [];

    Array.from(this.tomorrowHourlyForecast.children[1].children).forEach(
      (node) => this.tomorrowIconNodes.push(node.children[0].children[0])
    );

    //condition
    this.tomorrowConditionNodes = [];

    Array.from(this.tomorrowHourlyForecast.children[1].children).forEach(
      (node) => this.tomorrowConditionNodes.push(node.children[0].children[1])
    );

    // temperature
    this.tomorrowTempNodes = [];

    Array.from(this.tomorrowHourlyForecast.children[1].children).forEach(
      (node) => this.tomorrowTempNodes.push(node.children[2])
    );

    // forecast day

    this.NextDay_DayForecastIcon = document.querySelector(
      '.NextDay_DayForecastIcon'
    );

    this.NextDay_DayForecastCondition = document.querySelector(
      '.NextDay_DayForecastCondition'
    );
    this.NextDay_DayForecastTemperature_min = document.querySelector(
      '.NextDay_DayForecastTemperature_min'
    );
    this.NextDay_DayForecastTemperature_max = document.querySelector(
      '.NextDay_DayForecastTemperature_max'
    );
    this.NextDay_DayForecastTemperature_avg = document.querySelector(
      '.NextDay_DayForecastTemperature_avg'
    );

    this.NextDay_DayForecastHumidity = document.querySelector(
      '.NextDay_DayForecastHumidity'
    );

    this.NextDay_DayForecastVisibility = document.querySelector(
      '.NextDay_DayForecastVisibility'
    );
    this.NextDay_DayForecastWind = document.querySelector(
      '.NextDay_DayForecastWind'
    );

    this.NextDay_DayForecastSunrise = document.querySelector(
      '.NextDay_DayForecastSunrise'
    );
    this.NextDay_DayForecastSunset = document.querySelector(
      '.NextDay_DayForecastSunset'
    );

    // hourly NextDay forecast
    this.nextDayHourlyForecast = this.hourlyForecastNodes[2];

    // icons
    this.nextDayIconNodes = [];
    Array.from(this.nextDayHourlyForecast.children[1].children).forEach(
      (node) => this.nextDayIconNodes.push(node.children[0].children[0])
    );

    // condition
    this.nextDayConditionNodes = [];
    Array.from(this.nextDayHourlyForecast.children[1].children).forEach(
      (node) => this.nextDayConditionNodes.push(node.children[0].children[1])
    );

    // temperature
    this.nextDayTempNodes = [];
    Array.from(this.nextDayHourlyForecast.children[1].children).forEach(
      (node) => this.nextDayTempNodes.push(node.children[2])
    );
  }

  paint(weather, render, error) {
    if (error) {
      document.querySelector('.errorContainer').style.display = 'block';
      document.querySelector('.box').classList.add('boxevent');

      // adding show class
      document.querySelector('.eventLayer').classList.remove('eventLayerShown');
      return;
    }
    if (render) {
      document.querySelector('.Loader').style.display = 'block';
    }
    setTimeout(() => {
      document.querySelector('.Loader').style.display = 'none';
      document.querySelector('.box').classList.add('boxevent');
      // adding show class
      document.querySelector('.eventLayer').classList.add('eventLayerShown');
    }, 2000);

    const location = () => {
      if (weather.location.country === 'United States of America') {
        return 'USA';
      } else return weather.location.country;
    };

    const unit = localStorage.getItem('unit');

    const airQuality =
      Math.round(weather.current.air_quality.pm2_5 * 100) / 100;

    this.weatherIcon.style.background = `Url(${weather.current.condition.icon})`;

    this.weather.innerHTML = `${weather.current.condition.text}`;

    this.temp.innerHTML = `${
      weather.current['temp_' + unit]
    }&deg ${unit.toUpperCase()}`;

    this.feels.innerHTML = `Feels Like: ${
      weather.current['feelslike_' + unit]
    } &deg ${unit.toUpperCase()}`;
    this.pressure.innerHTML = `Pressure: ${weather.current.pressure_mb} Pa`;
    this.humidity.innerHTML = `Humidity: ${weather.current.humidity} %`;
    this.AQI.innerHTML = `AQI: ${airQuality}`;
    this.location.innerHTML = `<i class="fas fa-map-marker-alt pe-3"></i> ${
      weather.location.name
    }, ${location()}`;

    this.sunrise.innerHTML = `Sunrise: ${weather.forecast.forecastday[0].astro.sunrise}`;
    this.sunset.innerHTML = `Sunset: ${weather.forecast.forecastday[0].astro.sunset}`;

    // forecast day today
    this.today_DayForecastIcon.style.background = `Url(${weather.forecast.forecastday[0].day.condition.icon})`;
    this.today_DayForecastCondition.innerHTML = `${weather.forecast.forecastday[0].day.condition.text}`;
    this.today_DayForecastTemperature_min.innerHTML = `${
      weather.forecast.forecastday[0].day['mintemp_' + unit]
    }&deg ${unit.toUpperCase()} <span class="mt-1 d-block">Min</span>`;
    this.today_DayForecastTemperature_max.innerHTML = `${
      weather.forecast.forecastday[0].day['maxtemp_' + unit]
    }&deg ${unit.toUpperCase()} <span class="mt-1 d-block">Max</span>`;
    this.today_DayForecastTemperature_avg.innerHTML = `${
      weather.forecast.forecastday[0].day['avgtemp_' + unit]
    }&deg ${unit.toUpperCase()} <span class="mt-1 d-block">Avg</span>`;

    this.today_DayForecastHumidity.innerHTML = `${weather.forecast.forecastday[0].day.avghumidity} %`;
    this.today_DayForecastVisibility.innerHTML = `${weather.forecast.forecastday[0].day.avgvis_km} KM`;
    this.today_DayForecastWind.innerHTML = `${weather.forecast.forecastday[0].day.maxwind_kph} KPH`;

    // hourly forecast today

    // icons
    this.todayIconNodes.forEach(
      (icon, i) =>
        (icon.style.background = `Url(${weather.forecast.forecastday[0].hour[i].condition.icon})`)
    );

    // conditions
    this.todayConditionNodes.forEach(
      (node, i) =>
        (node.innerHTML = `${weather.forecast.forecastday[0].hour[i].condition.text}`)
    );

    // temperature
    this.todayTempNodes.forEach(
      (node, i) =>
        (node.innerHTML = `${
          weather.forecast.forecastday[0].hour[i]['temp_' + unit]
        }&deg ${unit.toUpperCase()}`)
    );

    // forecast day tomorrow
    this.tomorrow_DayForecastIcon.style.background = `Url(${weather.forecast.forecastday[1].day.condition.icon})`;
    this.tomorrow_DayForecastCondition.innerHTML = `${weather.forecast.forecastday[1].day.condition.text}`;
    this.tomorrow_DayForecastTemperature_min.innerHTML = `${
      weather.forecast.forecastday[1].day['mintemp_' + unit]
    }&deg ${unit.toUpperCase()} <span class="mt-1 d-block">Min</span>`;
    this.tomorrow_DayForecastTemperature_max.innerHTML = `${
      weather.forecast.forecastday[1].day['maxtemp_' + unit]
    }&deg ${unit.toUpperCase()} <span class="mt-1 d-block">Max</span>`;
    this.tomorrow_DayForecastTemperature_avg.innerHTML = `${
      weather.forecast.forecastday[1].day['avgtemp_' + unit]
    }&deg ${unit.toUpperCase()} <span class="mt-1 d-block">Avg</span>`;

    this.tomorrow_DayForecastHumidity.innerHTML = `${weather.forecast.forecastday[1].day.avghumidity} %`;
    this.tomorrow_DayForecastVisibility.innerHTML = `${weather.forecast.forecastday[1].day.avgvis_km} KM`;
    this.tomorrow_DayForecastWind.innerHTML = `${weather.forecast.forecastday[1].day.maxwind_kph} KPH`;
    this.tomorrow_DayForecastSunrise.innerHTML = `${weather.forecast.forecastday[1].astro.sunrise}`;
    this.tomorrow_DayForecastSunset.innerHTML = `${weather.forecast.forecastday[1].astro.sunset}`;

    // hourly forecast tomorrow

    // icons
    this.tomorrowIconNodes.forEach(
      (icon, i) =>
        (icon.style.background = `Url(${weather.forecast.forecastday[1].hour[i].condition.icon})`)
    );

    // conditions
    this.tomorrowConditionNodes.forEach(
      (node, i) =>
        (node.innerHTML = `${weather.forecast.forecastday[1].hour[i].condition.text}`)
    );

    // temperature
    this.tomorrowTempNodes.forEach(
      (node, i) =>
        (node.innerHTML = `${
          weather.forecast.forecastday[1].hour[i]['temp_' + unit]
        }&deg ${unit.toUpperCase()}`)
    );

    // forecast day NextDay
    this.NextDay_DayForecastIcon.style.background = `Url(${weather.forecast.forecastday[2].day.condition.icon})`;
    this.NextDay_DayForecastCondition.innerHTML = `${weather.forecast.forecastday[2].day.condition.text}`;
    this.NextDay_DayForecastTemperature_min.innerHTML = `${
      weather.forecast.forecastday[2].day['mintemp_' + unit]
    }&deg ${unit.toUpperCase()} <span class="mt-1 d-block">Min</span>`;
    this.NextDay_DayForecastTemperature_max.innerHTML = `${
      weather.forecast.forecastday[2].day['maxtemp_' + unit]
    }&deg ${unit.toUpperCase()} <span class="mt-1 d-block">Max</span>`;
    this.NextDay_DayForecastTemperature_avg.innerHTML = `${
      weather.forecast.forecastday[2].day['avgtemp_' + unit]
    }&deg ${unit.toUpperCase()} <span class="mt-1 d-block">Avg</span>`;

    this.NextDay_DayForecastHumidity.innerHTML = `${weather.forecast.forecastday[2].day.avghumidity} %`;
    this.NextDay_DayForecastVisibility.innerHTML = `${weather.forecast.forecastday[2].day.avgvis_km} KM`;
    this.NextDay_DayForecastWind.innerHTML = `${weather.forecast.forecastday[2].day.maxwind_kph} KPH`;
    this.NextDay_DayForecastSunrise.innerHTML = `${weather.forecast.forecastday[2].astro.sunrise}`;
    this.NextDay_DayForecastSunset.innerHTML = `${weather.forecast.forecastday[2].astro.sunset}`;

    // hourly forecast NextDay

    // icons
    this.nextDayIconNodes.forEach(
      (icon, i) =>
        (icon.style.background = `Url(${weather.forecast.forecastday[2].hour[i].condition.icon})`)
    );

    // conditions
    this.nextDayConditionNodes.forEach(
      (node, i) =>
        (node.innerHTML = `${weather.forecast.forecastday[2].hour[i].condition.text}`)
    );

    // temperature
    this.nextDayTempNodes.forEach(
      (node, i) =>
        (node.innerHTML = `${
          weather.forecast.forecastday[2].hour[i]['temp_' + unit]
        }&deg ${unit.toUpperCase()}`)
    );
  }
}
