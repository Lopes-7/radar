import { combineReducers } from 'redux';

import { alertsSearchReducer } from './alertsSearchReducer';
import { changeFilterReducer } from './changeFilterReducer';
import { changeDisplayReducer } from './changeDisplayReducer';
import { propertiesSearchReducer } from './propertiesSearchReducer';

//combinando reducers
export const Reducers = combineReducers({
  alertsSearchState: alertsSearchReducer,
  displayState: changeDisplayReducer,
  filtersState: changeFilterReducer,
  propertieSearchState: propertiesSearchReducer
  
});