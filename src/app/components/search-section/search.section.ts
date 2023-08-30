import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'search-section', // <location-section> to be used in html files
    //template: '<h2>Location</h2>'
    templateUrl: './search-section.html',
    //styleUrls: ['./location-section.css']
})

export class SearchSectionComponent implements OnInit {
    @Input() searchVal: string = "";
    @Output() searchChange = new EventEmitter<string>();

    ngOnInit(): void {
        
    }

    searchResults(value: string) {
        alert(value);

        //set the internal input variable to new value.
        this.searchVal = value;

        return value;
    }

    // This method will need to return value back up to parent
    handleSearchChange(value: string) {
        //alert("handleSearchChange: " + value);
        this.searchVal = value;
        this.searchChange.emit(this.searchVal);
    }
}