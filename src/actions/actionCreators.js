import {ALERTS_SEARCH_UPDATE_VALUE,
        CHANGE_DISPLAY,
        CHANGE_FILTER,
        PROPERTIES_SEARCH_UPDATE_VALUE 
         } from './actionTypes'
//outros action types serao importados

//action creator para a mudança do input "Search for Alerts"
export const changeAlertsSearch = value => ({
  type: ALERTS_SEARCH_UPDATE_VALUE,
  alertsSearchValue: value //string recebida
});

//action creator para o pressionamento de uma das colunas do Display
export const changeDisplay = value => ({
  type: CHANGE_DISPLAY,
  displayBy: value //string que identifica a coluna(title, color, status ...)
});

//action creator para a mudança do input "Filter Properties"
export const changePropertiesSearch = value => ({
  type: PROPERTIES_SEARCH_UPDATE_VALUE,
  propertiesSearchValue: value //string recebida
});

//action creator para o pressionamento dos botoes de filtro (open, closed, escalated)
export const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  filterType: value //string que identifica o filtro
});


