import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { changeDisplay} from '../actions/actionCreators';

class DisplayColumns extends Component {    
    render() { 
        const {displayBy, changeDisplay} = this.props
    
        return (
            <div className="columns">
                <div className="title-column"
                     onClick={()=>{changeDisplay('title')}}>TITLE</div>
                <div className="color-column"
                     onClick={()=>{changeDisplay('color');}}>
                    <Icon icon={IconNames.ERROR}
                          intent="primary"
                          className="icon-info" />
                    <Icon icon={IconNames.CARET_DOWN} 
                          intent="primary" />
                </div>
                <div className="status-column"
                onClick={()=>{changeDisplay('status');}}>STATUS</div>
                <div className="trader-column"
                onClick={()=>{changeDisplay('trader')}}>TRADER</div>
                <div className="counterparty-column"
                onClick={()=>{changeDisplay('counterparty')}}>COUNTERPARTY</div>
                <div className="book-column"
                onClick={()=>{changeDisplay('book')}}>BOOK</div>
                <div className="source-column"
                onClick={()=>{changeDisplay('source')}}>SOURCE</div>
            </div>
        );
    }
}

const mapStateToProps = store =>({
    displayBy: store.displayState.displayBy
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDisplay }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DisplayColumns);