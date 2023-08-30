import { Component, Input, OnInit } from '@angular/core';
import IWeatherData from 'src/app/models/IWeatherData';

@Component({
    selector: 'daily-weather', 
    templateUrl: './daily-weather.html',
    //styleUrls: ['./daily-weather.css']
})

export class DailyWeatherComponent implements OnInit {
    @Input() searchTerm: string;
    @Input() weatherData: IWeatherData;
    
    constructor() {
        this.searchTerm = '';
        this.weatherData = { forecast: {
            forecastday: []
        }};
    }

    ngOnInit(): void {

    }
}