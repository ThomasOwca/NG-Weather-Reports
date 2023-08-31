import IWeatherData, { Current } from "../models/IWeatherData";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { ICurrentWeatherData } from "../models/ICurrentWeatherData";

export class WeatherService {
  WeatherData: IWeatherData = {
    forecast: {
      forecastday: []
    }
  };

  CurrentWeatherData: ICurrentWeatherData = {};

  constructor(search: string, currentLocation: string, private http: HttpClient) {
    this.getWeatherForecastBySearchTerm(search);
    this.getCurrentWeather(currentLocation);
  }

  getWeatherForecastBySearchTerm(searchTerm: string): Observable<IWeatherData> {
    let url = "https://api.weatherapi.com/v1/forecast.json?key=1269538aeb134fa7abf154423233008&q=" + searchTerm + "&days=14";

    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getCurrentWeather(currentLocation: string): Observable<ICurrentWeatherData> {
    let url = "https://api.weatherapi.com/v1/current.json?key=1269538aeb134fa7abf154423233008&q=" + currentLocation;
    console.log(url);

    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}