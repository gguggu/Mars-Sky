
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import * as actions from 'store/weatherReducer';

const useWeather = () => {
  const dispatch = useDispatch();
  const weatherState = useSelector((store: RootState) => store.weathers);

  const getWeather = () => {
    dispatch(actions.getWeather.request(''));
  }

  return [weatherState, getWeather] as [
    Array<Object>,
    Function
  ];
}

export default useWeather;