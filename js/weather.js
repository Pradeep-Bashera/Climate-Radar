class Weather {
  constructor() {
    this.api_key = '5e08d6a267074c3ea10110225212311';
  }

  async getWeather() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${this.api_key}&q=${this.city}&days=3&aqi=yes&alerts=no`
    );

    const error = response.ok ? false : true;

    if (error) {
      throw new Error('Error in fetching weather');
    }

    const resData = await response.json();

    return resData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
