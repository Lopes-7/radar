import { combineReducers } from 'redux';

import { alertsSearchReducer } from './alertsSearchReducer';
import { changeFilterReducer } from './changeFilterReducer';
import { propertiesSearchReducer } from './propertiesSearchReducer';

//combinando reducers
export const Reducers = combineReducers({
  alertsSearchState: alertsSearchReducer,
  filtersState: changeFilterReducer,
  propertieSearchState: propertiesSearchReducer
  
});