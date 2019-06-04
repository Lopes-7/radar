import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeDisplay } from '../actions/actionCreators';

export class DisplayColumns extends Component {
    
    render() { 
        const {displayBy} = this.props
        console.log("das colunas"+displayBy)
        return (
            <div className="caber">
                <div onClick={()=>{
                    changeDisplay("title")}}>Title</div>

                <div onClick={()=>{
                    changeDisplay("color");}}>Color</div>
                <div onClick={()=>{changeDisplay('status');}}>Status</div>
                <div onClick={()=>{changeDisplay('trader')}}>Trader</div>
                <div onClick={()=>{changeDisplay('counterparty')}}>Counterparty</div>
                <div onClick={()=>{changeDisplay('book')}}>Book</div>
                <div onClick={()=>{changeDisplay('source')}}>Source</div>
            </div>
        );
    }
}

const mapStateToProps = store =>({
    displayBy: store.displayState.displayBy
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDisplay }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DisplayColumns); 
