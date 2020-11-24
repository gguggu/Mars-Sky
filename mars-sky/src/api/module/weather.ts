import axios from 'axios'
import { API_KEY } from 'config/config.json';

interface IStatic {
  av: number;
  ct: number;
  mn: number;
  mx: number;
}

export interface IWeather {
  AT: IStatic;
  First_UTC: string;
  Last_UTC: string;
  PRE: IStatic;
  Season: string;
  WD: Object;
}

export const getWeather = async() : Promise<IWeather> => {
  try {
    return await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`);
  } catch (error) {
    throw error;
  }
}
