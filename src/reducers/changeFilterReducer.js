import {CHANGE_FILTER} from '../actions/actionTypes';

//estado inicial os tres filtros desativados
const initialState = {
  activeFilters: []
};

export const changeFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      //verificando se o filtro encontra-se na lista de ativos
      const foundIndex = state.activeFilters.indexOf(action.filterName);
      if (foundIndex === -1){
        //se o filtro nao esta na lista é adicionado
        return {
          ...state,
          activeFilters: [...state.activeFilters, action.filterName]
        }
      }
      else{
        //se o filtro esta na lista é removido
        return{
          ...state,
          activeFilters: state.activeFilters.filter(item => item !== action.filterName), 
        }
        
      }
    default:
      return state;
  }
};
