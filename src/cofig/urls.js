import Authkey from "../constants/Authkey";

const BASE_URL='http://api.weatherapi.com/v1';



export const getApiUrl=(endPoints)=>BASE_URL+endPoints;

export const Current_Api=(lat_long)=>getApiUrl(`/current.json?q=${lat_long}&key=${Authkey.weather_api_key}`)
export const Forecast_Api=(lat_long,days)=>getApiUrl(`/forecast.json?q=${lat_long}&days=${days}&key=${Authkey.weather_api_key}`)