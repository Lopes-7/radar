import {CHANGE_DISPLAY} from '../actions/actionTypes';

//estado inicial os tres filtros desativados
const initialState = {
  displayBy: 'status'
};

export const changeDisplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY:
      return {
        ...state,
        displayBy: action.displayBy
        };
    default:
      return state;
  }
};
