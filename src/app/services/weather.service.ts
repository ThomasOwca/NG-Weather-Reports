import IWeatherData, { Current } from "../models/IWeatherData";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";

export class WeatherService {
  WeatherData: IWeatherData = {
    forecast: {
      forecastday: []
    }
  };

  constructor(search: string, private http: HttpClient) {
    this.getWeatherForecastBySearchTerm(search);
  }

  getWeatherForecastBySearchTerm(searchTerm: string): Observable<IWeatherData> {
    let url = "https://api.weatherapi.com/v1/forecast.json?key=1269538aeb134fa7abf154423233008&q=" + searchTerm + "&days=14";
    //console.log(url);
    let formattedData: IWeatherData = {
      forecast: {
        forecastday: []
      }
    };

    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}