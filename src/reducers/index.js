import { combineReducers } from 'redux';

import { propertiesSearchReducer } from './propertiesSearchReducer';
import { changeFilterReducer } from './changeFilterReducer';


export const Reducers = combineReducers({
  propertieSearchState: propertiesSearchReducer,
  filtersState: changeFilterReducer
  //outros reducers entrarão aqui
});