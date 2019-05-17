import { combineReducers,createStore } from 'redux';

import flagReducer from './reducers/flagReducer';
import settingsReducer from './reducers/settingsReducer';

const reducer = combineReducers({
    flagReducer,
    settingsReducer
});

const store = createStore(reducer);
export default store;