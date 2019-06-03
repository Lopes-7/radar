import {ALERTS_SEARCH_UPDATE_VALUE} from '../actions/actionTypes';

//estado inicial 
const initialState = {
  alertsSearchValue: ''
};

export const alertsSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERTS_SEARCH_UPDATE_VALUE:   
          return {
            ...state, 
            alertsSearchValue: action.alertsSearchValue
          }  
    default:
      return state;
  }
};
