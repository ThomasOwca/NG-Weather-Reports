import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeatherData } from './models/ICurrentWeatherData';
import IWeatherData from './models/IWeatherData';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'hello-world';
  weatherService: WeatherService;
  @Input() searchVal: string;
  @Input() weatherData: IWeatherData;
  @Input() currentWeatherData: ICurrentWeatherData;
  @Input() locationName: string;


  constructor(private http: HttpClient) {
    this.searchVal = "60523";

    this.weatherData = {
      forecast: {
        forecastday: []
      }
    };

    this.currentWeatherData = {};
    this.weatherService = new WeatherService(this.searchVal, this.searchVal, http);
    this.locationName = "";
  }

  ngOnInit(): void {
    // Call the Weather Service and attempt to fetch new weather data based on search term.
    this.getSearchValFromSearchComp(this.searchVal);
  }

  getSearchValFromSearchComp(value: string) {
    this.searchVal = value;

    // Call the Weather Service and attempt to fetch new weather data based on search term.
    this.weatherService.getWeatherForecastBySearchTerm(this.searchVal)
      .subscribe({

        next: (result) => {
          this.weatherData = result;

          for (let i = 0; i < 14; i++) {
            let forecastDate = new Date(result.forecast.forecastday[i].date);
            let forecaseDateLocal = new Date(forecastDate.toLocaleDateString());
            let forecastDay = forecaseDateLocal.getDate() + 1;
            let forecastMonth = forecaseDateLocal.getMonth() + 1;
            let dayOfWeek = this.getDayOfWeek(forecaseDateLocal.getDay() + 1);

            debugger;

            this.weatherData.forecast.forecastday[i].month = forecastMonth;
            this.weatherData.forecast.forecastday[i].monthDay = forecastDay;
            this.weatherData.forecast.forecastday[i].dayOfTheWeek = dayOfWeek;
          }

          console.log(this.weatherData);
        },

        error: (error) => console.error(error),
      });

      // Call the Weather Service and attempt to fetch new weather data based on search term.
    this.weatherService.getCurrentWeather(this.searchVal)
    .subscribe({

      next: (result) => {
        this.currentWeatherData = result;

        // for (let i = 0; i < 14; i++) {
        //   let forecastDate = new Date(result.forecast.forecastday[i].date);
        //   let forecaseDateLocal = new Date(forecastDate.toLocaleDateString());
        //   let forecastDay = forecaseDateLocal.getDate() + 1;
        //   let forecastMonth = forecaseDateLocal.getMonth() + 1;
        //   let dayOfWeek = this.getDayOfWeek(forecaseDateLocal.getDay() + 1);

        //   debugger;

        //   this.weatherData.forecast.forecastday[i].month = forecastMonth;
        //   this.weatherData.forecast.forecastday[i].monthDay = forecastDay;
        //   this.weatherData.forecast.forecastday[i].dayOfTheWeek = dayOfWeek;
        // }

        console.log(this.currentWeatherData);
      },

      error: (error) => console.error(error),
    });
  }

  getDayOfWeek(number: number) {
    if (number == 1) {
      return "Monday"
    }
    else if (number == 2) {
      return "Tuesday"
    }
    else if (number == 3) {
      return "Wednesday"
    }
    else if (number == 4) {
      return "Thursday"
    }
    else if (number == 5) {
      return "Friday"
    }
    else if (number == 6) {
      return "Saturday"
    }
    else if (number == 7) {
      return "Sunday"
    }

    return "";
  }
}
