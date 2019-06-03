import {PROPERTIES_SEARCH_UPDATE_VALUE, 
        CHANGE_FILTER } from './actionTypes'
//outros action types serao importados

//action creator para a mudança do input "Filter Properties"
export const changePropertiesSearch = value => ({
    type: PROPERTIES_SEARCH_UPDATE_VALUE,
    propertiesSearchValue: value //string
});

//action creator para o pressionamento dos botoes de filtro (open, closed, escalated)
export const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  filterType: value //string que identifica o filtro
});
