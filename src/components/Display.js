import React, { Component } from 'react';

import DisplayHeader from './DisplayHeader';
import DisplayTable from './DisplayTable';

export class Display extends Component {
    render() {
        return (
            <div className="display">
                <DisplayHeader />
                <DisplayTable />
            </div>);
    }
}