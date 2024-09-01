import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.css'
})
export class WeatherWidgetComponent implements OnInit{

  temperature: number = 25; // Example temperature
  condition: string = 'Sunny'; // Example weather condition
  weatherIcon: string = 'assets/weather-icons/sunny.png'; // Example weather icon

  forecast = [
    { date: 'Mon', icon: 'assets/weather-icons/cloudy.png', temperature: 22 },
    { date: 'Tue', icon: 'assets/weather-icons/rain.png', temperature: 19 },
    { date: 'Wed', icon: 'assets/weather-icons/sunny.png', temperature: 24 },
    { date: 'Thu', icon: 'assets/weather-icons/snow.png', temperature: 15 },
    { date: 'Fri', icon: 'assets/weather-icons/wind.png', temperature: 18 },
    { date: 'Sat', icon: 'assets/weather-icons/fog.png', temperature: 20 },
    { date: 'Sun', icon: 'assets/weather-icons/partly-cloudy.png', temperature: 23 },
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch real-time weather data from an API
  }
}
