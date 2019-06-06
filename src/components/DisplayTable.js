import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayColumns  from './DisplayColumns';
import { Trade } from './Trade';
import data from './Data.json';

export class DisplayTable extends Component {
    render() { 
        const selectedRows = [];
        
        //pegando estado da store
        const {activeFilters, 
               alertsSearchValue,
               displayBy} = this.props;
        
        data.map(row => {
            //passando dados pelo filtro de substring
            if(row.title.toLowerCase().indexOf(alertsSearchValue.trim().toLowerCase()) !== -1){
                //se os dados passaram pelo 1° filtro são testados pelos filtros de botão
                //se nao houver filtros ativos todos os dados sao selecionados
                if(activeFilters.length === 0){
                    selectedRows.push(row)
                }
                else{
                    //para cada filtro ativo testa se os seleciona os dados devem ser selecionados 
                    activeFilters.map((filter) => {
                        if (row.status === filter){
                            selectedRows.push(row)
                        }
                    })
                }        
        }});
        //organizando dados de acordo com o estado displayBy
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
            </div>
        );
    }
}

const mapStateToProps = store => ({ 
    activeFilters: store.filtersState.activeFilters,
    alertsSearchValue: store.alertsSearchState.alertsSearchValue,
    displayBy: store.displayState.displayBy
})

export default connect(mapStateToProps)(DisplayTable);