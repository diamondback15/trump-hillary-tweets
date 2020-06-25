import { createStore, compose, applyMiddleware } from 'redux'
import rootSaga from './rootSagas'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

let middlewares = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, compose(middlewares));
sagaMiddleware.run(rootSaga);

export default store;