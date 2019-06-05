import React, { Component } from 'react';

import { Tag } from "@blueprintjs/core";

export class Trade extends Component {
    render() { 
        return ( 
            <div className="trade">
                <div className="title-column">{this.props.title}</div>
                <div className={"color " + this.props.color}></div>
                <div className="status">{this.props.status.toUpperCase()}</div>
                <div className="trader">{this.props.trader}</div>
                <div className="counterparty">{this.props.counterparty}</div>
                <div className="book">{this.props.book}</div>
                <div className="source">{this.props.source}</div>
            </div>
        );
    }
}
