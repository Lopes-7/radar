import {CHANGE_DISPLAY} from '../actions/actionTypes';

//estado inicial: mostrar dados organizados pelo titulo
const initialState = {
  displayBy: 'title'
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
