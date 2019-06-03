import {PROPERTIES_SEARCH_UPDATE_VALUE} from '../actions/actionTypes';

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

//IMPORTANTE: esta função deverá ser pura, ou seja, retornar um novo objeto, pois lembrando, a
//Store é imutável. Conseguimos preservar o restante do estado usando o ...state, 
//que recupera o estado anterior e passa para o novo objeto.