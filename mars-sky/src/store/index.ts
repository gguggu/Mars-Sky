import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import saga from './saga';
import reducer from './weatherReducer';

const sagaMiddleware = createSagaMiddleWare();

export type RootState = ReturnType<typeof reducer>;

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;