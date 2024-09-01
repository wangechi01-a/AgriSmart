import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 
  private apiKey = '16bb949c387943f7b25200548243108'; // Your API key
  private apiUrl = 'http://api.weatherapi.com/v1'; // Base URL for WeatherAPI

  constructor(private http: HttpClient) { }

  getCurrentWeather(location: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.apiUrl}/current.json?key=${this.apiKey}&q=${location}`);
  }

  getForecast(location: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=7`);
  }
}
