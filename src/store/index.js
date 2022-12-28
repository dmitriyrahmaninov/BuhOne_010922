import { combineReducers, createStore } from 'redux';
import { reviewReducer } from './reducer/reviewReducer';
import { serviceReducer } from './reducer/serviceReducer';

const rootReducer = combineReducers({
    services: serviceReducer,
    reviews: reviewReducer
})

export const store = createStore(rootReducer);