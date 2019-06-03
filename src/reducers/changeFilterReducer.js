import {CHANGE_FILTER} from '../actions/actionTypes';

//estado inicial os tres filtros desativados
const initialState = {
  openFilter: false,
  closedFilter: false,
  escalatedFilter: false
};

export const changeFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      switch (action.filterType){
        case 'Open':
          return {
                ...state,
                openFilter: !state.openFilter
          }
        case 'Closed':
          return {
            ...state,
            closedFilter: !state.closedFilter
          }
        case 'Escalated':
          return {
            ...state,
            escalatedFilter: !state.escalatedFilter
          }
        default:
          return
      }
    default:
      return state;
  }
};
