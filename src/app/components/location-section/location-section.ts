import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeatherData } from 'src/app/models/ICurrentWeatherData';

@Component({
    selector: 'location-section', // <location-section> to be used in html files
    templateUrl: './location-section.html',
})

export class LocationSectionComponent implements OnInit {
    @Input() city: string;
    @Input() state: string;
    @Input() zipCode: string;
    @Input() imgUrl: string;
    @Input() currentWeather: ICurrentWeatherData;
    
    constructor() {
        this.city = 'Oak Brook';
        this.state = 'Illinois';
        this.zipCode = '60523';
        this.currentWeather = {};
        this.imgUrl = "";
    }

    ngOnInit(): void {
        this.currentWeather = {};
    }

    getLocationDisplay(searchVal: string = ""): string {
        this.city = this.currentWeather?.location?.name ?? "";
        this.state = this.currentWeather?.location?.region ?? "";
        
        let formattedLocation = this.city + ", " + this.state;        
        return formattedLocation;
    }
}