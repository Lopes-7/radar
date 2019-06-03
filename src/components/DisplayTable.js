import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Trade } from './Trade';
import data from './Data.json';

export class DisplayTable extends Component {


    render() { 
        //pegando estado da store
        const {openFilter, closedFilter, escalatedFilter} = this.props;
        //selecionando dados que serão mostrados com base nos filtros ativados
        const selectedRows = [];
        data.map(datum => {
                
            if (openFilter){
                
                if (datum.status === 'Open'){
                    selectedRows.push(datum);
                }
            }
            if (closedFilter){
                if (datum.status === 'Closed'){
                    selectedRows.push(datum);
                }
            }
            if (escalatedFilter){
                if (datum.status === 'Escalated'){
                    selectedRows.push(datum);
                }
            }
            //se nenhum filtro estiver ativado todos dados devem ser mostrados
            if (!openFilter && !closedFilter && !escalatedFilter){
                selectedRows.push(datum);
            }
        })
        return (
            <div>
                <p>Title</p>
                <ul>
                    {selectedRows.map(datum => {
                        return <Trade key={datum.title}
                                      title={datum.title} 
                                      status={datum.status}
                                      trader={datum.trader}
                                      counterparty={datum.counterparty}
                                      book={datum.book}
                                      source={datum.source} />
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = store => ({ 
    openFilter: store.filtersState.openFilter,
    closedFilter: store.filtersState.closedFilter,
    escalatedFilter: store.filtersState.escalatedFilter
})

export default connect(mapStateToProps)(DisplayTable); 