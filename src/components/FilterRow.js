import React, { Component } from 'react';

import { Icon } from "@blueprintjs/core";
import { IconNames } from '@blueprintjs/icons';

import Filter  from './Filter';

//Componente que contém os filtros que podem ser aplicados. Agrupamento de filtros
export class FilterRow extends Component {
    state = {
        hidden: true
    }
    render() { 
        const filters = this.props.content
        const visibleFilters = [];
        if (filters !== null && this.state.hidden === false){
            filters.map((filter)=>{
                visibleFilters.push(<Filter name={filter} key={filter} />)
            })
        }
        
        
        return ( <div>
            <div className="filter-row">
                <p className="title">{this.props.name}</p>
                <Icon className="filter-row-icon"
                      onClick={() => {this.setState({hidden: !this.state.hidden})}} 
                      icon={this.state.hidden ? IconNames.CHEVRON_RIGHT : IconNames.CHEVRON_DOWN } />
            </div>
            {!this.state.hidden && <div className="filter-expand">{visibleFilters}</div>}
            </div>
        );
    }
}