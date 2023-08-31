import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather';
import { LocationSectionComponent } from './components/location-section/location-section';
import { SearchSectionComponent } from './components/search-section/search.section';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WeatherHistoryComponent } from './components/weather-history/weather-history';

@NgModule({
  declarations: [
    AppComponent,
    LocationSectionComponent,
    SearchSectionComponent,
    DailyWeatherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot([
      {path: 'weather-history', component: WeatherHistoryComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
