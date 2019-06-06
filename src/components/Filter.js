import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
 
import { Button } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { changeFilter } from '../actions/actionCreators';

export class Filter extends Component {
    render() { 
        //pegando o estado da store
        const {changeFilter, activeFilters} = this.props   
        
        //definindo se este filtro esta ativado
        var isActive = false;
        if (activeFilters.indexOf(this.props.name) !== -1){
            isActive = true;
        } 
        
        return (
            <div className="filter">
            <Button className={!isActive ? "filter-button" : ""}
                    icon={IconNames.SMALL_CROSS}
                    small={true}
                    intent={isActive ? "success" : "none"}
                    onClick={()=>{changeFilter(this.props.name)}}> 
                    {this.props.name}                     
            </Button>
            
            </div>
        );
    }
}

const mapStateToProps = store => ({ 
    activeFilters: store.filtersState.activeFilters
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeFilter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);