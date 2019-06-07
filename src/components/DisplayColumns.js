import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import { changeDisplay } from '../actions/actionCreators';

class DisplayColumns extends Component {    
    render() { 
        //pegando estado da store
        const {changeDisplay, displayBy} = this.props
        
        //renderizando colunas, ao clicar em cada uma delas muda a forma como os dados
        //são mostrados e a coluna selecionada fica azul
        return (
            <div className="columns">
                <div className={(displayBy === 'title') ? "title-column-selected" : "title-column"}
                     onClick={()=>{changeDisplay('title');}}>TITLE</div>

                <div className={(displayBy === 'color') ? "color-column-selected" : "color-column"}
                     onClick={()=>{changeDisplay('color');}}>
                    <Icon icon={IconNames.ERROR}
                          className="icon-info" />
                    <Icon icon={IconNames.CARET_DOWN} />
                </div>

                <div className={(displayBy === 'status') ? "status-column-selected" : "status-column"}
                     onClick={()=>{changeDisplay('status');}}>STATUS</div>

                <div className={(displayBy === 'trader') ? "trader-column-selected" : "trader-column"}
                     onClick={()=>{changeDisplay('trader');}}>TRADER</div>

                <div className={(displayBy === 'counterparty') ? "counterparty-column-selected" : "counterparty-column"}
                     onClick={()=>{changeDisplay('counterparty');}}>COUNTERPARTY</div>

                <div className={(displayBy === 'book') ? "book-column-selected" : "book-column"}
                     onClick={()=>{changeDisplay('book');}}>BOOK</div>

                <div className={(displayBy === 'source') ? "source-column-selected" : "source-column"}
                     onClick={()=>{changeDisplay('source');}}>SOURCE</div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    displayBy: store.displayState.displayBy
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDisplay }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DisplayColumns);