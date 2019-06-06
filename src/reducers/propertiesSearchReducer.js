import {PROPERTIES_SEARCH_UPDATE_VALUE} from '../actions/actionTypes';

//estado inicial: a string de busca é vazia
const initialState = {
    propertiesSearchValue: ''
  };

export const propertiesSearchReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROPERTIES_SEARCH_UPDATE_VALUE:
        return {
          ...state,
          propertiesSearchValue: action.propertiesSearchValue
        };
      default:
        return state;
    }
  };