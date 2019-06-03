import React, { Component } from 'react';

export class Trade extends Component {
    render() { 
        return ( 
            <div>
            {this.props.title} {this.props.status} 
            </div>
        );
    }
}
