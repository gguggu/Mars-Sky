import { IWeather } from 'api/module/weather';
import { AxiosError } from 'axios';
import { ActionType, createAsyncAction, createReducer } from 'typesafe-actions';

const FETCH_WEATHER = {
  REQUEST: 'WEATHER_FETCH_REQUEST',
  SUCCESS: 'WEATHER_FETCH_SUCCESS',
  FAILURE: 'WEATHER_FETCH_FAILURE'
};

interface IRequest {

}

interface IResponse {
  weathers: IWeather[];
}

export const getWeather = 
createAsyncAction(FETCH_WEATHER.REQUEST, FETCH_WEATHER.SUCCESS, FETCH_WEATHER.FAILURE)
<IRequest, IResponse, AxiosError>();

const actions = {
  getWeather
};

type Actions = ActionType<typeof actions>;
type State = { weathers: IWeather[], message: string };

const initialState: State = { weathers: [], message: '' };

const reducer = createReducer<State, Actions>(initialState)
  .handleAction(getWeather.success, (state, action) => {
    return { ...state, weathers: action.payload.weathers };
  })
  .handleAction(getWeather.failure, (state, action) => {
    return { ...state, message: action.payload.message };
  })
  .handleAction(getWeather.request, (state) => {
    return { ...state };
  })

export default reducer;