import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Trade } from './Trade';
import data from './Data.json';

export class DisplayTable extends Component {


    render() { 
        const selectedRows = [];
        
        //pegando estado da store, se o filtro x está ativado a constante x é verdadeira
        const {openFilter, closedFilter, escalatedFilter, alertsSearchValue} = this.props;
        
        data.map(row => {
            //passando dados pelo filtro de substring
            if(row.title.indexOf(alertsSearchValue.trim()) !== -1){
                //se os dados passaram pelo primeiro filtro são testados pelos de botão
                if (openFilter){
                    if (row.status === 'Open'){
                        selectedRows.push(row);
                    }
                }
                if (closedFilter){
                    if (row.status === 'Closed'){
                        selectedRows.push(row);
                    }
                }
                if (escalatedFilter){
                    if (row.status === 'Escalated'){
                        selectedRows.push(row);
                    }
                }
                //se nenhum filtro de botão estiver ativado todos dados devem ser mostrados
                if (!openFilter && !closedFilter && !escalatedFilter){
                    if(row.title.indexOf(alertsSearchValue.trim()) !== -1){
                        selectedRows.push(row);
                    }
                }
            }
        })
            
        return (
            <div>
                <ul>
                    {selectedRows.map(row => {
                        return <Trade key={row.title}
                                      title={row.title}
                                      color={row.color} 
                                      status={row.status}
                                      trader={row.trader}
                                      counterparty={row.counterparty}
                                      book={row.book}
                                      source={row.source} />
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = store => ({ 
    openFilter: store.filtersState.openFilter,
    closedFilter: store.filtersState.closedFilter,
    escalatedFilter: store.filtersState.escalatedFilter,
    alertsSearchValue: store.alertsSearchState.alertsSearchValue
})

export default connect(mapStateToProps)(DisplayTable); 