import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() locationName: string;


  constructor(private http: HttpClient) {
    this.searchVal = "60523";
    this.weatherData = {};
    this.weatherService = new WeatherService(this.searchVal, http);
    this.locationName = "";
  }

  ngOnInit(): void {
    // Call the Weather Service and attempt to fetch new weather data based on search term.
    this.getSearchValFromSearchComp(this.searchVal);
  }

  getSearchValFromSearchComp(value: string){
    this.searchVal = value;

    // Call the Weather Service and attempt to fetch new weather data based on search term.
    this.weatherService.getWeatherForecastBySearchTerm(this.searchVal)
    .subscribe({

      next: (result) => {
        this.weatherData = result;
      },

      error: (error) => console.error(error),
    });
  }
}
