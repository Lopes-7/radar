import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
 
import { Button } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { changeFilter } from '../actions/actionCreators';

export class Filter extends Component {
    render() { 
        //pegando o estado da store
        const {changeFilter, openFilter, closedFilter, escalatedFilter} = this.props   
        //definindo qual filtro é este e utilizando o estado corrreto
        var validFilter
        switch (this.props.name){
            case 'Open':
                validFilter = openFilter;
                break
            case 'Closed':
                validFilter = closedFilter;
                break
            case 'Escalated': 
                validFilter = escalatedFilter;
                break
        }
        
        return (
            <div className="filter">
            <Button className={!validFilter ? "filter-button" : ""}
                    icon={IconNames.SMALL_CROSS}
                    small={true}
                    intent={validFilter ? "success" : "none"}
                    onClick={()=>{changeFilter(this.props.name)}}> 
                    {this.props.name}                     
            </Button>
            
            </div>
        );
    }
}

const mapStateToProps = store => ({ 
    openFilter: store.filtersState.openFilter,
    closedFilter: store.filtersState.closedFilter,
    escalatedFilter: store.filtersState.escalatedFilter
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeFilter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);