// reducers/index.js
import { combineReducers } from 'redux';
import dataReducer from './dataSlice';

const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers here if needed
});

export default rootReducer;
