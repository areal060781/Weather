const API_KEY = 'df42609430782b10537fc7df2a392b16';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
    return {
        type: FETCH_WEATHER,
    }
}