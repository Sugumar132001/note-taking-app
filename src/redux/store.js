import { createStore } from 'redux';
import notesReducer from './reducer';

const store = createStore(
    notesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
