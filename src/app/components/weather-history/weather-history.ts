import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeatherData } from 'src/app/models/ICurrentWeatherData';

@Component({
    selector: 'weather-history',
    templateUrl: './weather-history.html',
})

export class WeatherHistoryComponent implements OnInit {
    @Input() city: string;
    @Input() state: string;
    @Input() zipCode: string;
    @Input() currentWeather: ICurrentWeatherData;
    
    constructor() {
        this.city = 'Oak Brook';
        this.state = 'Illinois';
        this.zipCode = '60523';
        this.currentWeather = {};
    }

    ngOnInit(): void {
        this.currentWeather = {};
    }

    getHistoryDisplay(searchVal: string = ""): string {    
        return "Histories List goes here";
    }
}