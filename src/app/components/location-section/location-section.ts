import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'location-section', // <location-section> to be used in html files
    //template: '<h2>Location</h2>'
    templateUrl: './location-section.html',
    //styleUrls: ['./location-section.css']
})

export class LocationSectionComponent implements OnInit {
    @Input() city: string;
    @Input() state: string;
    @Input() zipCode: string;
    
    constructor() {
        this.city = 'Oak Brook';
        this.state = 'Illinois';
        this.zipCode = '60523';
    }

    ngOnInit(): void {

    }

    getLocationDisplay(searchVal: string = ""): string {
        let formattedLocation = this.city + ", " + this.state + " " + this.zipCode;
        
        // if (searchVal) {
        //     let formattedLocation = this.city + ", " + this.state + " " + this.zipCode;
        // }
        // else {
        //     // Call Weather service and get location
        // }

        
        return formattedLocation;
    }
}