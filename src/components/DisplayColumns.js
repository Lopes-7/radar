import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeDisplay} from '../actions/actionCreators';

class DisplayColumns extends Component {
    
    render() { 
        const {displayBy, changeDisplay} = this.props
    
        return (
            <div className="container flex">
                <div className="item flex-item-1"
                onClick={()=>{changeDisplay('title')}}>TITLE</div>
                <div className="item"
                onClick={()=>{changeDisplay('color');}}>Color</div>
                <div className="item flex-item-1"
                onClick={()=>{changeDisplay('status');}}>STATUS</div>
                <div className="item flex-item-1"
                onClick={()=>{changeDisplay('trader')}}>TRADER</div>
                <div className="item flex-item-1"
                onClick={()=>{changeDisplay('counterparty')}}>COUNTERPARTY</div>
                <div className="item flex-item-1"
                onClick={()=>{changeDisplay('book')}}>BOOK</div>
                <div className="item flex-item-1"
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
