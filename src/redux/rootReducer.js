
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import sagas from './store';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
export function configureStore(initialState) {

    const store = createStore(
        reducer,
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(sagas);

    return store;
}
