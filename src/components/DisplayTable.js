import React, { Component } from 'react';
import { connect } from 'react-redux';

import  DisplayColumns  from './DisplayColumns';
import { Trade } from './Trade';
import data from './Data.json';

export class DisplayTable extends Component {

    render() { 
        const selectedRows = [];
        
        //pegando estado da store, se o filtro x está ativado a constante x é verdadeira
        const {openFilter,
               closedFilter, 
               escalatedFilter, 
               alertsSearchValue,
               displayBy} = this.props;
        
        console.log("displayTable: " + displayBy);
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
                    selectedRows.push(row);
                    
                }
            }
        })
        //organizando dados de acordo com displayBy
        console.log("iniciando sort: " + displayBy)
        switch(displayBy){
            case 'title':
                selectedRows.sort((a,b)=>{return a.title.localeCompare(b.title)})
                break
            case 'status':
                selectedRows.sort((a,b)=>{return a.status.localeCompare(b.status)})
                break
            case 'color':
                selectedRows.sort((a,b)=>{return a.color.localeCompare(b.color)})
                break
            case 'trader':
                selectedRows.sort((a,b)=>{return a.trader.localeCompare(b.trader)})
                break
            case 'counterparty':
                selectedRows.sort((a,b)=>{return a.counterparty.localeCompare(b.counterparty)})
                break
            case 'book':
                selectedRows.sort((a,b)=>{return a.book.localeCompare(b.book)})
                break
            case 'source':
                selectedRows.sort((a,b)=>{return a.source.localeCompare(b.source)})
                break
        }
        return (
            <div>
                <DisplayColumns />
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
    alertsSearchValue: store.alertsSearchState.alertsSearchValue,
    displayBy: store.displayState.displayBy
})

export default connect(mapStateToProps)(DisplayTable); 