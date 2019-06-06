import React, { Component } from 'react';

import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import Filter from './Filter';

//Componente que contém os filtros que podem ser aplicados. Agrupamento de filtros
export class FilterRow extends Component {
    state = {
        hidden: true
    }
    render() { 
        //recebe a lista de filtros que este agrupamento contém
        const filters = this.props.content
        const visibleFilters = [];
        
        //se este agrupamento contem filtros e o estado interno diz que estes
        //filtros devem ser mostrados
        if (filters !== null && this.state.hidden === false){
            filters.map((filter)=>{
                visibleFilters.push(<Filter name={filter} key={filter} />)
            })
        }
        
        //renderiza o agrupamento de filtros e dependendo do valor do estado
        //interno do componente e renderiza também os filtros
        return ( 
            <div>
                <div className="filter-row"
                     onClick={() => {this.setState({hidden: !this.state.hidden})}}>
                    <p className="filter-row-title">{this.props.name}</p>
                    <Icon className="filter-row-icon"                     
                        icon={this.state.hidden ? IconNames.CHEVRON_RIGHT : IconNames.CHEVRON_DOWN } />
                </div>
                {!this.state.hidden && <div className="filter-expand">{visibleFilters}</div>}
            </div>
        );
    }
}