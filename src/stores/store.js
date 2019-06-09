import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import MapReducer from "../reducers/MapReducer";
import {ADD_ITEM} from '../actions/Map';

function saveToLocalStorage(state) {
   try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
   } catch (e) {
      console.log(e)
   }
}

function loadFromLocalStorage() {
   try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) return undefined
      return JSON.parse(serializedState)
   } catch (e) {
      console.log(e)
      return undefined
   }
}

const reducer = combineReducers({
   marks: MapReducer,
/*   form: formReducer,*/

   form: formReducer.plugin({
      marks: (state, action) => {
         switch(action.type) {
            case ADD_ITEM:
               return undefined;
            default:
               return state;
         }
      }
   })
});

const persistedState = loadFromLocalStorage();

const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(reduxThunk, logger));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;


