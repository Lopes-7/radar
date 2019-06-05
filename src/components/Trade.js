import React, { Component } from 'react';

export class Trade extends Component {
    render() { 
        return ( 
            <div className="trade">
                <div>{this.props.title}</div>
                <div>{this.props.color}</div>
                <div>{this.props.status}</div>
                <div>{this.props.trader}</div>
                <div>{this.props.counterparty}</div>
                <div>{this.props.book}</div>
                <div>{this.props.source}</div>
            </div>
        );
    }
}
