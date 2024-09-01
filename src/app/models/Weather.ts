// weather.ts
export interface CurrentWeather {
    temperature: number;
    condition: string;
    weatherIcon: string;
  }
  
  export interface ForecastDay {
    date: string;
    icon: string;
    temperature: number;
  }
  
  export interface WeatherResponse {
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
    forecast: {
      forecastday: Array<{
        date: string;
        day: {
          condition: {
            icon: string;
          };
          avgtemp_c: number;
        };
      }>;
    };
  }
  