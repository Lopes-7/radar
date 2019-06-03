import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import { InputGroup } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import {changePropertiesSearch} from '../actions/actionCreators';
import {FilterRow} from './FilterRow';

//Componente que contem os agrupamento de filtros
export class FilterTable extends Component {
        
    render() { 
        const filterRows = [{name: 'Status',
                                 content: ['Open', 'Closed', 'Escalated']},
                                {name: 'Time',
                                 content: null},
                                {name: 'Assignee', 
                                 content: null},
                                {name: 'Watcher',
                                 content: null},
                                {name: 'Counterparty',
                                 content: null},
                                {name: 'Severity',
                                 content: null},
                                {name: 'Source',
                                content: null},
                                {name: 'Trader',
                                content: null}];
        
        //pegando o estado da store
        const {changePropertiesSearch, propertiesSearchValue} = this.props;
        
        //determinando quais linhas de filtros devem ser mostradas
        const visibleFilterRows = [];
        filterRows.map((filter)=>{
            if(filter.name.indexOf(propertiesSearchValue.trim()) === -1){
                return
            }
            visibleFilterRows.push(
                
                <FilterRow name={filter.name} key={filter.name} content={filter.content}></FilterRow>
            ) 
        })
        return (
            <div>
               <InputGroup 
                     
                    className="FilterTableSearch"
                    leftIcon={IconNames.FILTER}
                    placeholder="Find properties..."
                    large="true"
                    onChange={((e)=> {
                        changePropertiesSearch(e.target.value);
                        })} 
                />
                {visibleFilterRows}

            </div>
        );
    }
}

const mapStateToProps = store => ({
    propertiesSearchValue: store.propertieSearchState.propertiesSearchValue 
})
    
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changePropertiesSearch }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(FilterTable); 
